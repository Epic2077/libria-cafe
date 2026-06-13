import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth0 } from "@/lib/auth0";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

// Admin-only login. There is no sign-up — accounts are provisioned manually in
// the Auth0 dashboard. Sign-ups should also be disabled on the Auth0 database
// connection so the hosted login page never offers a "Sign up" tab.
export default async function LoginPage() {
  const session = await auth0.getSession();

  // Already signed in → go straight to the dashboard.
  if (session) {
    redirect("/dashboard/menu");
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-10 text-center shadow-[0_30px_80px_-60px_rgba(47,38,33,0.45)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#8A9A86]">
          Libria Studio
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-[#2F2621]">
          Admin sign in
        </h1>
        <p className="mt-3 text-sm text-[#6D5C50]">
          This area is restricted to café administrators. Sign in to manage the
          menu.
        </p>

        {/*
          Must be a plain <a> (full page navigation), not next/link — the SDK's
          /auth/login route lives outside the React router.
        */}
        <a
          href="/auth/login?returnTo=/dashboard/menu"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#2F2621] px-6 py-3 text-sm font-semibold text-[#FDFBF7] transition hover:bg-[#473a31]"
        >
          Log in
        </a>
      </div>
    </div>
  );
}
