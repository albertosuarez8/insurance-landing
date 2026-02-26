import { useLanguage } from "../context/LanguageContext";

const options = [
  { locale: "en", flag: "🇺🇸", label: "English" },
  { locale: "es", flag: "🇪🇸", label: "Español" },
];

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const other = options.find((o) => o.locale !== locale) ?? options[1];

  function toggle() {
    setLocale(other.locale);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex min-w-[7rem] justify-center rounded-full border border-slate-200/80 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow-sm transition-all duration-200 hover:bg-slate-50 [perspective:120px]"
      aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <span
        key={locale}
        className="inline-flex animate-flip items-center gap-2 [transform-style:preserve-3d]"
      >
        <span aria-hidden>{other.flag}</span>
        {other.label}
      </span>
    </button>
  );
}
