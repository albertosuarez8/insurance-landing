import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

const icons = [
  // Scales of justice (Legal Protection)
  <svg key="legal" className="h-6 w-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>,
  // Document / property (Property Damage)
  <svg key="property" className="h-6 w-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  // Heart (Bodily Injury)
  <svg key="bodily" className="h-6 w-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Megaphone (Advertising Claims)
  <svg
    key="advertising"
    className="h-6 w-6 text-brand-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8.5L7 12m9-3.5v7a1 1 0 001.447.894L20 15.5m-4-7l-9 3.5m9-3.5V5a1 1 0 00-1.447-.894L7 6.5m0 0H5a2 2 0 00-2 2v3a2 2 0 002 2h2"
    />
  </svg>,
];

export default function WhyYouNeed() {
  const { t } = useLanguage();
  const items = t("whyYouNeed.items");

  return (
    <section className="border-y-2 border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
            {t("whyYouNeed.titleBefore")}
            <span className="inline-block border-b-4 border-brand-500 pb-0.5">
              {t("whyYouNeed.titleHighlight")}
            </span>
            {t("whyYouNeed.titleAfter")}
          </h2>
        </AnimateIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.isArray(items) &&
            items.map((item, i) => (
              <AnimateIn key={item?.title} delay={80 + i * 80}>
              <div
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-brand-400 bg-toggle/60">
                  {icons[i]}
                </div>
                <h3 className="shrink-0 text-base font-bold text-slate-900 sm:text-lg">
                  {item?.title}
                </h3>
                <p className="mt-2 flex-1 text-left text-sm leading-relaxed text-slate-600">
                  {item?.description}
                </p>
              </div>
              </AnimateIn>
            ))}
        </div>
      </div>
    </section>
  );
}
