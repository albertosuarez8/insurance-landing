import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL || ""}/logos/BoA_Logo-03.png`}
            alt={t("nav.title")}
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#quote"
            className="hidden rounded-md bg-brand-500 px-3.5 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-md sm:inline-block"
          >
            {t("nav.getQuote")}
          </a>
          <a
            href="tel:+17866361009"
            className="hidden flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline-flex"
          >
            <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {t("nav.phone")}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <LanguageToggle />
            <a
              href="#quote"
              className="rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-brand-600 hover:shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.getQuote")}
            </a>
            <a
              href="tel:+17866361009"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {t("nav.phone")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
