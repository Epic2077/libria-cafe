import type { Metadata } from "next";

// The dashboard is admin-only — keep it out of search engines entirely.
export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
