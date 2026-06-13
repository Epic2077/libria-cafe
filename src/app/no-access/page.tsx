import { auth0 } from "@/lib/auth0";

// Shown when a user is authenticated but is NOT on the admin allow-list.
export default async function NoAccessPage() {
  const session = await auth0.getSession();
  const email = session?.user?.email;

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-10 text-center shadow-[0_30px_80px_-60px_rgba(47,38,33,0.45)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C56C50]">
          Access denied
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-[#2F2621]">
          Not an administrator
        </h1>
        <p className="mt-3 text-sm text-[#6D5C50]">
          {email
            ? `You're signed in as ${email}, but this account isn't allowed into the dashboard.`
            : "This account isn't allowed into the dashboard."}
        </p>

        <a
          href="/auth/logout"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#2F2621] px-6 py-3 text-sm font-semibold text-[#FDFBF7] transition hover:bg-[#473a31]"
        >
          Sign out
        </a>
      </div>
    </div>
  );
}
