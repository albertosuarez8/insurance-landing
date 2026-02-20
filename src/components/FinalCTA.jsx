import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="border-y-4 border-brand-600 bg-brand-500 py-12 sm:py-16">
      <AnimateIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          {t("finalCta.title")}
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          {t("finalCta.subtitle")}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-brand-500 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg sm:w-auto"
          >
            {t("finalCta.getStarted")}
          </a>
          <span className="text-sm text-white/80">{t("finalCta.or")}</span>
          <a
            href="tel:+17866361009"
            className="inline-flex items-center gap-1.5 text-base font-medium text-white hover:underline"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {t("finalCta.call")}
          </a>
        </div>
      </AnimateIn>
    </section>
  );
}
