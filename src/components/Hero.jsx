import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const badges = t("hero.badges");

  return (
    <section className="border-b-4 border-brand-950 bg-gradient-to-b from-brand-900 to-brand-800 pt-24 pb-10 sm:pt-28 sm:pb-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
          {t("hero.title")}
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-brand-100 sm:text-base">
          {t("hero.subtitle")}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {Array.isArray(badges) &&
            badges.map((label) => (
              <span
                key={label}
                className="inline-flex items-center rounded-md border border-brand-300/80 bg-white/10 px-3 py-1.5 text-xs font-medium text-white sm:text-sm"
              >
                {label}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
