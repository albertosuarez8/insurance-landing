import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function QuoteResult() {
  const { t } = useLanguage();

  return (
    <div className="app-root min-h-screen bg-cream">
      <header className="bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center">
            <img
              src="/logos/testlogo.png"
              alt={t("quoteResult.title")}
              className="h-11 w-auto sm:h-14"
            />
          </Link>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              to="/"
              className="rounded-md bg-brand-500 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              {t("nav.backToHome")}
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="rounded-xl border border-slate-300 bg-white p-8 shadow-lg sm:p-10">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <svg
                className="h-7 w-7 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="mt-6 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            {t("quoteResult.congratulations")}
          </h1>
          <p className="mt-3 text-center text-lg text-slate-600">
            {t("quoteResult.quoteMessage")}
          </p>
          <p className="mt-2 text-center text-sm text-slate-500">
            {t("quoteResult.followUp")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-brand-600"
            >
              {t("nav.backToHome")}
            </Link>
            <a
              href="tel:+17866361009"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t("quoteResult.call")}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
