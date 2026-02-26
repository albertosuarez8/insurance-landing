import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { AnimateIn } from "./AnimateIn";

export default function QuoteForm() {
  const [agreed, setAgreed] = useState(false);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [employees, setEmployees] = useState("");
  const [additional, setAdditional] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const businessTypes = t("quoteForm.businessTypes");
  const employeeCounts = t("quoteForm.employeeCounts");
  const heroBadges = t("hero.badges");

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value?.trim() ?? "");
  const isValidPhone = (value) => {
    const digits = (value ?? "").replace(/\D/g, "");
    return digits.length >= 10;
  };

  const emailValid = isValidEmail(email);
  const phoneValid = isValidPhone(phone);
  const showEmailError = emailTouched && email.trim() !== "" && !emailValid;
  const showPhoneError = phoneTouched && phone.trim() !== "" && !phoneValid;

  const isComplete =
    agreed &&
    company.trim() !== "" &&
    name.trim() !== "" &&
    phone.trim() !== "" &&
    phoneValid &&
    email.trim() !== "" &&
    emailValid &&
    businessType !== "" &&
    employees !== "";

  const formspreeEndpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT;

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitError(null);

    const payload = {
      company: company.trim(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      businessType,
      employees,
      ...(additional.trim() && { additional: additional.trim() }),
      _subject: `Quote request from ${name.trim()} (${company.trim()})`,
    };

    if (formspreeEndpoint) {
      setSubmitting(true);
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Submit failed");
      } catch (err) {
        setSubmitError(t("quoteForm.submitError") ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSubmitting(false);
    }

    navigate("/quote-result");
  }

  const checkIcon = (
    <svg className="h-6 w-6 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section
      id="quote"
      className="relative -mt-24 scroll-mt-24 overflow-hidden pt-24 pb-12 sm:pb-16 md:pb-20"
    >
      {/* Base gradient: bottom-right, slate-50 → white → orange-50/30 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30" />
      {/* Right half: orange wash fading to transparent */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-orange-100/40 to-transparent" />
      {/* Blurred orbs for depth */}
      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: badge + headline + copy + feature list (like reference image) */}
          <AnimateIn className="lg:sticky lg:top-28">
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-lg border border-brand-400 bg-toggle/80 px-3 py-1.5 text-center">
              <svg className="h-5 w-5 shrink-0 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wide text-slate-700 sm:text-base">
                {t("hero.badge")}
              </span>
              </div>
            </div>
            <h2 className="mt-4 text-center text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-left lg:text-5xl xl:text-6xl">
              <span className="block">{t("hero.titleLine1")}</span>
              <span className="block">
                {t("hero.titleLine2")}
                <span className="text-brand-500">{t("hero.titleLine2Orange")}</span>
              </span>
              <span className="block text-brand-500">{t("hero.titleLine3")}</span>
            </h2>
            <p className="mt-3 text-center text-base leading-relaxed text-slate-600 lg:text-left lg:text-lg">
              {t("hero.subtitle")}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:mt-8 lg:gap-y-4">
              {Array.isArray(heroBadges) &&
                heroBadges.map((label) => (
                  <li key={label} className="flex items-center gap-2 text-slate-700">
                    {checkIcon}
                    <span className="text-base font-medium text-slate-800 sm:text-lg">{label}</span>
                  </li>
                ))}
            </ul>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-xl border border-slate-300 bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:mt-0"
          >
            <h3 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
              {t("quoteForm.heading")}
            </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.companyName")}
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t("quoteForm.companyPlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.yourName")}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("quoteForm.namePlaceholder")}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.phone")}
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => setPhoneTouched(true)}
                placeholder={t("quoteForm.phonePlaceholder")}
                className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
                  showPhoneError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-300 focus:border-brand-500"
                }`}
              />
              {showPhoneError && (
                <p className="mt-1 text-xs text-red-600">{t("quoteForm.phoneInvalid")}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.email")}
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouched(true)}
                placeholder={t("quoteForm.emailPlaceholder")}
                className={`w-full rounded-lg border bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
                  showEmailError
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-slate-300 focus:border-brand-500"
                }`}
              />
              {showEmailError && (
                <p className="mt-1 text-xs text-red-600">{t("quoteForm.emailInvalid")}</p>
              )}
            </div>
            <div>
              <label htmlFor="business-type" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.typeOfBusiness")}
              </label>
              <select
                id="business-type"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">{t("quoteForm.select")}</option>
                {Array.isArray(businessTypes) &&
                  businessTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="employees" className="mb-1 block text-sm font-medium text-brand-500">
                {t("quoteForm.numberOfEmployees")}
              </label>
              <select
                id="employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">{t("quoteForm.select")}</option>
                {Array.isArray(employeeCounts) &&
                  employeeCounts.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="additional" className="mb-1 block text-sm font-medium text-brand-500">
              {t("quoteForm.additionalInfo")} <span className="text-slate-400">{t("quoteForm.optional")}</span>
            </label>
            <textarea
              id="additional"
              rows={2}
              value={additional}
              onChange={(e) => setAdditional(e.target.value)}
              placeholder={t("quoteForm.additionalPlaceholder")}
              className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          <label className="mt-3 flex cursor-pointer items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-500 focus:ring-brand-500"
            />
            <span className="text-sm text-slate-600">
              {t("quoteForm.privacyPrefix")}{" "}
              <a
                href={`${process.env.PUBLIC_URL || ""}/Boapr-Insurance-Privacy-Policy.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-500 underline hover:text-brand-600"
              >
                {t("quoteForm.privacyLink")}
              </a>
            </span>
          </label>

          {submitError && (
            <p className="mt-3 text-sm text-red-600">{submitError}</p>
          )}
          <button
            type="submit"
            disabled={!isComplete || submitting}
            className={`mt-5 w-full rounded-xl px-5 py-3 text-sm font-medium transition ${
              isComplete && !submitting
                ? "cursor-pointer bg-brand-500 text-white shadow-md hover:bg-brand-600 hover:shadow-lg"
                : "cursor-not-allowed bg-toggle text-white shadow-none"
            }`}
          >
            {submitting ? (t("quoteForm.sending") ?? "Sending…") : t("quoteForm.getMyQuote")}
          </button>
        </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
