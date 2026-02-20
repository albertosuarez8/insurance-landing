import { useLanguage } from "../context/LanguageContext";

const phoneIcon = (
  <svg className="h-5 w-5 shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);
const emailIcon = (
  <svg className="h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const locationIcon = (
  <svg className="h-5 w-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PRIVACY_URL =
  "https://boaprinsurance.com/wp-content/uploads/2025/11/Politica-de-Priviacidad-Boapr-Insurance.pdf";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <img
              src="/logos/footer.png"
              alt=""
              className="h-12 w-auto max-w-[180px] object-contain object-left"
              aria-hidden
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="tel:+17866361009"
                  className="flex items-center gap-2 text-white hover:text-brand-400"
                >
                  {phoneIcon}
                  (786) 636-1009
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@boaprinsurance.com"
                  className="flex items-center gap-2 text-brand-400 hover:text-brand-300"
                >
                  {emailIcon}
                  info@boaprinsurance.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                {locationIcon}
                Florida, USA
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              {t("footer.legal")}
            </h3>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 underline hover:text-white"
            >
              {t("footer.privacyPolicy")}
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
