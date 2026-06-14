import Link from "next/link";
import { ArrowLeft, Compass, Home, Menu } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[72vh] items-center overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(232,163,139,0.2),transparent_44%),radial-gradient(circle_at_86%_86%,rgba(138,154,134,0.22),transparent_42%),linear-gradient(180deg,#FDFBF7_0%,#F8F2E9_100%)]" />
      <div className="pointer-events-none absolute -inset-s-20 top-16 -z-10 h-60 w-60 rounded-full border border-[#E8A38B]/35 bg-white/35 blur-3xl" />
      <div className="pointer-events-none absolute -inset-e-20 bottom-8 -z-10 h-64 w-64 rounded-full border border-[#8A9A86]/35 bg-white/35 blur-3xl" />

      <div className="mx-auto w-full max-w-4xl">
        <div className="rounded-4xl border border-white/65 bg-white/70 p-6 shadow-[0_30px_90px_-55px_rgba(47,38,33,0.45)] backdrop-blur-xl sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8A38B]/40 bg-[#FDFBF7] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C56C50]">
            <Compass size={14} strokeWidth={2} />
            404 Not Found
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight font-bold text-[#2F2621] sm:text-5xl lg:text-6xl">
            این مسیر در لیبریا پیدا نشد
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5F5046] sm:text-lg">
            صفحه ای که دنبال آن بودید وجود ندارد یا جابه جا شده است. از مسیرهای
            زیر ادامه دهید و دوباره به فضای کافه برگردید.
          </p>

          <p
            className="mt-6 block max-w-2xl text-sm leading-relaxed text-[#746355] sm:text-base"
            dir="ltr"
          >
            The page you are looking for does not exist, has moved, or the URL
            was typed incorrectly. Use the quick links below to get back on
            track.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2F2621] px-6 py-3 text-sm font-semibold text-[#FDFBF7] transition hover:-translate-y-0.5 hover:bg-[#473A31]"
            >
              <Home size={16} strokeWidth={2} />
              بازگشت به خانه
            </Link>

            <Link
              href="/menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DCCFBE] bg-[#FDFBF7] px-6 py-3 text-sm font-semibold text-[#3E3129] transition hover:-translate-y-0.5 hover:border-[#E8A38B] hover:text-[#C56C50]"
            >
              <Menu size={16} strokeWidth={2} />
              مشاهده منو
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#DCCFBE] bg-[#FDFBF7] px-6 py-3 text-sm font-semibold text-[#3E3129] transition hover:-translate-y-0.5 hover:border-[#8A9A86] hover:text-[#5E6F5B]"
            >
              تماس با ما
              <ArrowLeft
                size={16}
                strokeWidth={2}
                className="transition group-hover:-translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-[#ECE3D8] bg-[#FDFBF7]/85 px-4 py-3 text-sm text-[#6D5C50] sm:text-base">
            اگر نشانی را دستی وارد کرده اید، یک بار املای آن را بررسی کنید.
            <span className="ms-1  inline text-[#8B7668]" dir="ltr">
              If you typed the URL manually, double-check the spelling.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
