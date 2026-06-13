import { NextResponse, type NextRequest } from "next/server";

import { auth0 } from "./lib/auth0";

// Comma-separated list of admin emails allowed into the dashboard.
// Set ADMIN_EMAIL (or ADMIN_EMAILS) in Vercel → Project → Settings → Environment Variables.
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

function isAdmin(email: string | undefined | null) {
  if (!email) return false;
  // If no admin list is configured, deny everyone (fail closed).
  if (ADMIN_EMAILS.length === 0) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export async function proxy(request: NextRequest) {
  // Let the Auth0 SDK mount and handle all /auth/* routes (login, logout,
  // callback, etc.) and roll the session cookie on every request.
  const authRes = await auth0.middleware(request);

  const { pathname } = request.nextUrl;

  // Never gate the auth routes themselves — the SDK owns them.
  if (pathname.startsWith("/auth")) {
    return authRes;
  }

  // Everything under /dashboard is admin-only.
  if (pathname.startsWith("/dashboard")) {
    const session = await auth0.getSession(request);

    // Not logged in → send to the Auth0 login page, then back to where they were.
    if (!session) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("returnTo", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Logged in but not an allowed admin → bounce to the no-access page.
    if (!isAdmin(session.user?.email as string | undefined)) {
      return NextResponse.redirect(new URL("/no-access", request.url));
    }
  }

  return authRes;
}

export const config = {
  matcher: [
    /*
     * Run on all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * The broad matcher is required so the SDK can roll sessions and serve /auth/*.
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
