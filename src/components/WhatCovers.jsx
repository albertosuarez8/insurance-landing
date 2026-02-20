import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

export default function WhatCovers() {
  const { t } = useLanguage();
  const items = t("whatCovers.items");

  return (
    <section className="bg-cream py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateIn>
        <div className="overflow-hidden rounded-3xl bg-[#1D365C] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 sm:p-8 lg:flex lg:items-stretch lg:gap-10 lg:p-10">
          {/* Left: list of coverages */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t("whatCovers.title")}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-brand-100 sm:text-base">
              {Array.isArray(items) &&
                items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Right: temporary image card */}
          <div className="mt-6 flex-1 lg:mt-0">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-black/20 sm:h-64 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=600&fit=crop"
                alt={t("whatCovers.title")}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-4 py-2 text-xs shadow-lg sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-4 w-4 text-emerald-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 103.293 9.293l4 4a1 1 0 001.414 0l8-8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      A+ Rated
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Insurance Carriers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
