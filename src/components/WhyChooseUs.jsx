import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

const icons = [
  // People / team (Independent & Client-Focused)
  <svg key="people" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  // Lightning (Fast Quotes & Easy Process)
  <svg key="lightning" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Globe (Bilingual Service)
  <svg key="globe" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
  // Map pin (Local Experts)
  <svg key="map" className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const benefits = t("whyChooseUs.benefits");

  return (
    <section className="border-y-2 border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="flex flex-col items-center px-2">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#1e293b] sm:text-3xl">
            {t("whyChooseUs.titleBefore")}
            <span className="text-[#1e293b]">{t("whyChooseUs.titleHighlight")}</span>
            {t("whyChooseUs.titleAfter")}
          </h2>
          <div
            className="mt-1 h-[3px] w-24 shrink-0 rounded-full bg-brand-500 sm:w-28"
            aria-hidden
          />
        </AnimateIn>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {Array.isArray(benefits) &&
            benefits.map((b, i) => (
              <AnimateIn key={b?.title} delay={80 + i * 80}>
                <div
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 text-left shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-500">
                      {icons[i]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-[#1e293b] sm:text-xl">
                        {b?.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-slate-600">
                        {b?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
        </div>
      </div>
    </section>
  );
}
