import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

export default function StatsBar() {
  const { t } = useLanguage();
  const stats = t("quoteForm.statsBar");

  if (!Array.isArray(stats) || stats.length === 0) return null;

  return (
    <AnimateIn delay={100} as="section" className="w-full">
      <div className="w-full bg-[#1D365C] py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:gap-8 sm:px-6 lg:px-8">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-brand-400 sm:text-4xl">
                {item?.value}
              </div>
              <div className="mt-1.5 text-base font-medium text-slate-400 sm:text-lg">
                {item?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
