import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "insurance-landing-locale";

const translations = {
  en: {
    nav: {
      title: "General Liability Insurance",
      getQuote: "Get Your Free Quote",
      phone: "(786) 636-1009",
      backToHome: "Back to home",
    },
    hero: {
      badge: "General Liability Insurance",
      title: "Protect Your Business from Unexpected Risks",
      titleLine1: "Protect Your",
      titleLine2: "Business from",
      titleLine2Orange: "",
      titleLine3: "Unexpected Risks",
      subtitle:
        "Get comprehensive coverage that shields your business from property damage, bodily injury, and advertising claims. Fast approval, competitive rates.",
      badges: ["Legal Protection", "Property Damage", "Bodily Injury", "Advertising Claims"],
    },
    quoteForm: {
      heading: "Get Your Free Quote",
      subtitle: "Fill out the form and we’ll get you a competitive quote in minutes.",
      companyName: "Company Name",
      companyPlaceholder: "Your company name",
      yourName: "Your Name",
      namePlaceholder: "Full name",
      phone: "Phone",
      phonePlaceholder: "(555) 123-4567",
      email: "Email",
      emailPlaceholder: "you@company.com",
      typeOfBusiness: "Type of Business",
      numberOfEmployees: "Number of Employees",
      select: "Select...",
      additionalInfo: "Additional Information",
      optional: "(Optional)",
      additionalPlaceholder: "Tell us about your business or coverage needs...",
      privacyPrefix: "I have read and agree to the",
      privacyLink: "privacy policy",
      getMyQuote: "Get My Quote",
      businessTypes: [
        "Contractor",
        "Retail",
        "Restaurant",
        "Professional Services",
        "Healthcare",
        "Technology",
        "Other",
      ],
      employeeCounts: ["1-5", "6-10", "11-50", "51-200", "200+"],
      trustBadges: [
        { label: "Approval Time", sub: "Under 15 min" },
        { label: "Bundle Savings", sub: "Save 10%" },
        { label: "Online Access", sub: "24/7" },
        { label: "Rated Carriers", sub: "A+ rated" },
      ],
      statsBar: [
        { value: "15 min", label: "Approval Time" },
        { value: "10%", label: "Bundle Savings" },
        { value: "24/7", label: "Online Access" },
        { value: "A+", label: "Rated Carriers" },
      ],
      emailInvalid: "Please enter a valid email address.",
      phoneInvalid: "Please enter a valid phone number (at least 10 digits).",
    },
    whyYouNeed: {
      title: "Why You Need General Liability Insurance",
      titleBefore: "Why You Need ",
      titleHighlight: "General",
      titleAfter: " Liability Insurance",
      items: [
        {
          title: "Legal Protection",
          description:
            "Covers legal fees and settlements if your business faces a lawsuit",
        },
        {
          title: "Property Damage",
          description:
            "Pays for damages you accidentally cause to someone else's property",
        },
        {
          title: "Bodily Injury",
          description:
            "Covers medical expenses if someone is injured on your premises",
        },
        {
          title: "Advertising Claims",
          description:
            "Protects against claims of slander, libel, or copyright infringement",
        },
      ],
    },
    whatCovers: {
      title: "What Does General Liability Cover?",
      items: [
        "Third-party bodily injury claims",
        "Property damage to others",
        "Personal and advertising injury",
        "Legal defense costs",
        "Medical payments",
        "Completed operations coverage",
      ],
    },
    whyChooseUs: {
      aRated: "A+ Rated",
      carriers: "Insurance Carriers",
      title: "Why Choose Us?",
      titleBefore: "Why ",
      titleHighlight: "Choose",
      titleAfter: " Us?",
      subtitle: "We make it simple to get the coverage your business needs.",
      benefits: [
        {
          title: "Independent & Client-Focused",
          description:
            "We work with multiple A-rated carriers to find you the best coverage",
        },
        {
          title: "Fast Quotes & Easy Process",
          description:
            "Get approved in under 15 minutes with our streamlined process",
        },
        {
          title: "Bilingual Service",
          description:
            "Full support in English and Spanish for your convenience",
        },
        {
          title: "Local Experts",
          description:
            "Florida-based team that understands your business needs",
        },
      ],
    },
    finalCta: {
      title: "Ready to Protect Your Business?",
      subtitle:
        "Get your free General Liability quote today. No obligations, just answers.",
      getStarted: "Get Started Now",
      or: "or",
      call: "Call (786) 636-1009",
    },
    footer: {
      companyName: "Boapr Insurance",
      description:
        "Independent insurance agency dedicated to helping families and businesses protect what matters most.",
      contact: "Contact",
      legal: "Legal",
      privacyPolicy: "privacy policy",
      copyright: "Boapr Insurance. All rights reserved.",
    },
    quoteResult: {
      title: "General Liability Insurance",
      backToHome: "Back to home",
      congratulations: "Congratulations!",
      quoteMessage: "This is your estimated quote. We'll build from here.",
      followUp: "A team member will reach out shortly with next steps and your full quote details.",
      call: "Call (786) 636-1009",
    },
  },
  es: {
    nav: {
      title: "Seguro de Responsabilidad General",
      getQuote: "Cotización Gratis",
      phone: "(786) 636-1009",
      backToHome: "Volver al inicio",
    },
    hero: {
      badge: "SEGURO DE GENERAL LIABILITY",
      title: "Proteja Su Negocio de Riesgos Inesperados",
      titleLine1: "Proteja Su Negocio",
      titleLine2: "de ",
      titleLine2Orange: "Riesgos",
      titleLine3: "Inesperados",
      subtitle:
        "Obtenga cobertura integral que protege su negocio de daños a la propiedad, lesiones corporales y reclamos publicitarios. Aprobación rápida, tarifas competitivas.",
      badges: [
        "Protección Legal",
        "Lesiones Corporales",
        "Daños a Propiedad",
        "Reclamos Publicitarios",
      ],
    },
    quoteForm: {
      heading: "Obtenga Su Cobertura Ya",
      subtitle: "Completa el formulario y te enviaremos una cotización competitiva en minutos.",
      companyName: "Nombre de la Empresa",
      companyPlaceholder: "ABC Company",
      yourName: "Su Nombre",
      namePlaceholder: "John Doe",
      phone: "Teléfono",
      phonePlaceholder: "(786) 000-0000",
      email: "Correo electrónico",
      emailPlaceholder: "email@company.com",
      typeOfBusiness: "Tipo de Negocio",
      numberOfEmployees: "Número de Empleados",
      select: "Select...",
      additionalInfo: "Información Adicional (Opcional)",
      optional: "",
      additionalPlaceholder: "...",
      privacyPrefix: "He leído y acepto la",
      privacyLink: "política de privacidad",
      getMyQuote: "Obtener Cotización",
      emailInvalid: "Por favor ingrese un correo electrónico válido.",
      phoneInvalid: "Por favor ingrese un número de teléfono válido (al menos 10 dígitos).",
      businessTypes: [
        "Contratista",
        "Minorista",
        "Restaurante",
        "Servicios Profesionales",
        "Salud",
        "Tecnología",
        "Otro",
      ],
      employeeCounts: ["1-5", "6-10", "11-50", "51-200", "200+"],
      trustBadges: [
        { label: "Tiempo de Aprobación", sub: "Menos de 15 min" },
        { label: "Ahorro al Agrupar", sub: "Ahorra 10%" },
        { label: "Acceso en Línea", sub: "24/7" },
        { label: "Aseguradoras Calificadas", sub: "Calificación A+" },
      ],
      statsBar: [
        { value: "15 min", label: "Tiempo de Aprobación" },
        { value: "10%", label: "Ahorro en Paquetes" },
        { value: "24/7", label: "Acceso en Línea" },
        { value: "A+", label: "Aseguradoras" },
      ],
    },
    whyYouNeed: {
      title: "Por Qué Necesita Seguro de Responsabilidad Civil (General Liability)",
      titleBefore: "Por Qué Necesita Seguro de ",
      titleHighlight: "Responsabilidad",
      titleAfter: " Civil (General Liability)",
      items: [
        {
          title: "Protección Legal",
          description:
            "Cubre honorarios legales y acuerdos si su negocio enfrenta una demanda",
        },
        {
          title: "Daños a Propiedad",
          description:
            "Paga por daños que accidentalmente cause a la propiedad de terceros",
        },
        {
          title: "Lesiones Corporales",
          description:
            "Cubre gastos médicos si alguien se lesiona en sus instalaciones",
        },
        {
          title: "Reclamos Publicitarios",
          description:
            "Protege contra reclamos de difamación, calumnia o violación de derechos de autor",
        },
      ],
    },
    whatCovers: {
      title: "¿Qué Cubre la Responsabilidad General?",
      items: [
        "Reclamos por lesiones corporales de terceros",
        "Daños a propiedad ajena",
        "Lesiones personales y publicitarias",
        "Costos de defensa legal",
        "Pagos médicos",
        "Cobertura de operaciones completadas",
      ],
    },
    whyChooseUs: {
      aRated: "Calificación A+",
      carriers: "Aseguradoras",
      title: "¿Por Qué Elegir Boapr Insurance?",
      titleBefore: "¿Por Qué Elegir ",
      titleHighlight: "Boapr Insurance",
      titleAfter: "?",
      subtitle: "Hacemos sencillo obtener la cobertura que su negocio necesita.",
      benefits: [
        {
          title: "Independiente y Enfocado en el Cliente",
          description:
            "Trabajamos con múltiples aseguradoras A+ para encontrar la mejor cobertura",
        },
        {
          title: "Cotizaciones Rápidas y Proceso Fácil",
          description:
            "Aprobación en menos de 15 minutos con nuestro proceso simplificado",
        },
        {
          title: "Servicio Bilingüe",
          description:
            "Soporte completo en inglés y español para su conveniencia",
        },
        {
          title: "Expertos Locales",
          description:
            "Equipo basado en Florida que entiende las necesidades de su negocio",
        },
      ],
    },
    finalCta: {
      title: "¿Listo para Proteger Su Negocio?",
      subtitle:
        "Obtenga su cotización gratuita de Responsabilidad General hoy. Sin obligaciones, solo respuestas.",
      getStarted: "Comenzar Ahora",
      or: "O",
      call: "llámenos al (786) 636-1009",
    },
    footer: {
      companyName: "Boapr Insurance",
      description:
        "Agencia de seguros independiente dedicada a ayudar a familias y negocios a proteger lo que más importa.",
      contact: "Contacto",
      legal: "Legal",
      privacyPolicy: "política de privacidad",
      copyright: "Boapr Insurance. Todos los derechos reservados.",
    },
    quoteResult: {
      title: "Seguro de Responsabilidad General",
      backToHome: "Volver al inicio",
      congratulations: "¡Felicitaciones!",
      quoteMessage: "Esta es tu cotización estimada. Construiremos desde aquí.",
      followUp:
        "Un miembro del equipo se comunicará pronto con los próximos pasos y los detalles completos de tu cotización.",
      call: "Llamar al (786) 636-1009",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {}
  }, [locale]);

  const setLocale = (next) => {
    setLocaleState(next === "es" ? "es" : "en");
  };

  const t = (key) => {
    const keys = key.split(".");
    let v = translations[locale];
    for (const k of keys) {
      v = v?.[k];
    }
    return v ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
