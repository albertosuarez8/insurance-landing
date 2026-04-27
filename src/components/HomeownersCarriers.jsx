import { useLanguage } from "../context/LanguageContext";

const carrierLogos = [
  "664e5d38f1f6fc7d0e2a11de_slide-400-removebg-preview.png",
  "American-removebg-preview.png",
  "Edison-removebg-preview.png",
  "FL_Peninsula-removebg-preview.png",
  "GeoVera-removebg-preview.png",
  "Ovation-removebg-preview.png",
  "Southern Oak.png",
];

export default function HomeownersCarriers() {
  const { t } = useLanguage();
  const publicUrl = process.env.PUBLIC_URL || "";

  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,122,32,0.2),_transparent_55%)]" />
      <div className="absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            {t("homeownersCarriers.kicker")}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            {t("homeownersCarriers.title")}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {carrierLogos.map((file, index) => (
            <div
              key={file}
              className={`group flex h-24 items-center justify-center rounded-xl border border-white/40 bg-white p-3 shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-[0_14px_32px_rgba(244,122,32,0.35)] ${
                carrierLogos.length % 2 === 1 && index === carrierLogos.length - 1
                  ? "col-span-2 mx-auto w-full max-w-[12rem] sm:col-span-1 sm:max-w-none"
                  : ""
              }`}
            >
              <img
                src={encodeURI(`${publicUrl}/logos 2/${file}`)}
                alt="Homeowners insurance carrier"
                loading="lazy"
                className="max-h-12 w-full object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
