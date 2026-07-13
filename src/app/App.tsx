import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, ArrowRight, Globe, Phone, Send, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logotipo from "@/imports/logo-nuevo.png";
import isotipo from "@/imports/isotipo.png";
import whatsappIcon from "@/imports/whatsapp.png";
import { translations } from "@/locales/translations";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import { LegalPage } from "./pages/LegalPage";
import { ContactPage } from "./pages/ContactPage";

const projects = [
  {
    id: 1,
    title: "Starter SaaS",
    category: "SaaS",
    year: "2025",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    alt: "Modern SaaS dashboard template with analytics",
  },
  {
    id: 2,
    title: "Storefront Pro",
    category: "E-Commerce",
    year: "2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
    alt: "E-commerce template with product grid layout",
  },
  {
    id: 3,
    title: "Folio Minimal",
    category: "Portfolio",
    year: "2024",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop&auto=format",
    alt: "Clean portfolio template with gallery view",
  },
  {
    id: 4,
    title: "Analytics Hub",
    category: "Dashboard",
    year: "2024",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop&auto=format",
    alt: "Dashboard template with charts and data widgets",
  },
];

function Home({ lang }: { lang: 'en' | 'es' }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const t = translations[lang];

  const filters = ["All", "SaaS", "E-Commerce", "Portfolio", "Dashboard"];
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { value: "500+", label: t.stats.t1 },
    { value: "12K+", label: t.stats.t2 },
    { value: "98%", label: t.stats.t3 },
    { value: "24/7", label: t.stats.t4 },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end pb-32 pt-32 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="absolute top-[30%] right-6 md:right-12 w-px bg-border h-48 opacity-40" />


        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: "var(--accent)" }}
        >
          {t.hero.subtitle}
        </p>

        <h1
          className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.1] font-black tracking-tight mb-10 max-w-5xl"
          style={{ fontFamily: "'UM Cloft', serif", color: "#328aa0" }}
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-foreground/60">{t.hero.titleLine2}</span>
          <br />
          {t.hero.titleLine3}
        </h1>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:pr-24">
          <p className="text-base text-foreground/60 max-w-sm leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#templates"
              className="group flex items-center gap-3 text-sm font-medium uppercase tracking-widest"
            >
              <span
                className="w-10 h-px transition-all duration-300 group-hover:w-20"
                style={{ background: "var(--accent)" }}
              />
              {t.hero.explore}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-12 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-foreground/30" style={{ writingMode: "vertical-rl" }}>
            {t.hero.scroll}
          </span>
          <div className="w-px h-12 bg-foreground/20" />
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-border" style={{ background: "#001a27" }}>
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span
                className="text-4xl font-black leading-none"
                style={{ color: "var(--accent)" }}
              >
                {s.value}
              </span>
              <span className="text-xs tracking-widest uppercase text-foreground/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="templates" className="py-28 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              {t.projects.featured}
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight"
            >
              {t.projects.title1}
              <br />
              {t.projects.title2}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-foreground/50 hover:border-foreground hover:text-foreground"
                }`}
              >
                {t.projects.filters[f as keyof typeof t.projects.filters] || f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-muted cursor-pointer ${
                i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-foreground/60 mb-1">
                      {project.category} — {project.year}
                    </p>
                    <h3
                      className="text-2xl font-black text-foreground"
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={18} color="white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:opacity-0 transition-opacity duration-300">
                <p
                  className="text-xs tracking-widest uppercase text-foreground/50"
                >
                  {project.category} — {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center text-foreground/30 text-sm tracking-widest uppercase">
            {t.projects.empty}
          </div>
        )}
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border py-28 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              {t.services.subtitle}
            </p>
            <h2
              className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight"
            >
              {t.services.title}
            </h2>
          </div>
          <div className="divide-y divide-border">
            {t.services.items.map((s) => (
              <div key={s.label} className="group flex items-start gap-8 py-8 cursor-pointer">
                <span
                  className="text-xs mt-1 flex-shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {s.label}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-xl font-black group-hover:text-accent transition-colors"
                    >
                      {s.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    />
                  </div>
                  <p className="text-sm text-foreground/50 mt-2 leading-relaxed max-w-md">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border py-28 px-6 md:px-12" style={{ background: "#001a27" }}>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              {t.about.subtitle}
            </p>
            <h2
              className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-8"
            >
              {t.about.title1}
              <br />
              {t.about.title2}
              <br />
              {t.about.title3}
            </h2>
            <p className="text-foreground/50 leading-relaxed max-w-md mb-8">
              {t.about.p1} <em>{t.about.p1bold}</em>
            </p>
            <p className="text-foreground/50 leading-relaxed max-w-md mb-10">
              {t.about.p2}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest group"
            >
              <span>{t.about.meet}</span>
              <span
                className="w-8 h-px transition-all duration-300 group-hover:w-16"
                style={{ background: "var(--accent)" }}
              />
            </a>
          </div>

          <div className="relative aspect-square bg-foreground/20 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=700&fit=crop&auto=format"
              alt="Team of designers and developers collaborating in a modern office"
              className="w-full h-full object-cover opacity-70"
            />
            <div
              className="absolute top-6 left-6 text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {t.about.teamImg}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AnimatedRoutes({ lang, t }: { lang: 'es'|'en', t: any }) {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home lang={lang} />} />
        <Route 
          path="/privacy" 
          element={
            <LegalPage 
              title={t.legal.privacyTitle} 
              date={t.legal.privacyDate} 
              p1={t.legal.privacyP1} 
              p2={t.legal.privacyP2} 
              backText={t.legal.back}
            />
          } 
        />
        <Route 
          path="/terms" 
          element={
            <LegalPage 
              title={t.legal.termsTitle} 
              date={t.legal.termsDate} 
              p1={t.legal.termsP1} 
              p2={t.legal.termsP2} 
              backText={t.legal.back}
            />
          } 
        />
        <Route 
          path="/contact" 
          element={
            <ContactPage t={t} />
          } 
        />
      </Routes>
    </div>
  );
}

function GlobalContactForm({ t }: { t: any }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="border-t border-border relative z-10">
      <div className="py-24 px-6 md:px-12 max-w-lg mx-auto">
        <h3 className="text-lg font-black tracking-widest uppercase text-center mb-8" style={{ color: 'var(--accent)' }}>
          {t.contact.formTitle}
        </h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
            const templateType = (form.elements.namedItem('templateType') as HTMLInputElement)?.value;
            
            const templateText = templateType ? `Plantilla de interés: ${templateType}\n` : '';
            const mailto = `mailto:contacto@boommambawave.com?subject=Contacto de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n${templateText}\n${message}`)}`;
            window.location.href = mailto;
            form.reset();
          }}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            required
            placeholder={t.contact.formName}
            className="w-full px-5 py-4 bg-[#003347] border border-border text-white text-sm tracking-wide placeholder:text-white/60 focus:border-accent focus:outline-none transition-colors"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={t.contact.formEmail}
            className="w-full px-5 py-4 bg-[#003347] border border-border text-white text-sm tracking-wide placeholder:text-white/60 focus:border-accent focus:outline-none transition-colors"
          />
          {isHomePage && (
            <input
              type="text"
              name="templateType"
              placeholder={t.contact.formTemplate}
              className="w-full px-5 py-4 bg-[#003347] border border-border text-white text-sm tracking-wide placeholder:text-white/60 focus:border-accent focus:outline-none transition-colors"
            />
          )}
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.contact.formMessage}
            className="w-full px-5 py-4 bg-[#003347] border border-border text-white text-sm tracking-wide placeholder:text-white/60 focus:border-accent focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-white transition-colors duration-200"
          >
            <Send size={15} />
            {t.contact.formSend}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'es'|'en'>('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = translations[lang];

  const navItems = [
    { key: "Templates", label: t.nav.templates },
    { key: "Services", label: t.nav.services },
    { key: "About", label: t.nav.about },
    { key: "Contact", label: t.nav.contact },
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className="min-h-screen bg-background text-foreground overflow-x-hidden relative"
        style={{ fontFamily: "'Tw Cen MT', 'Century Gothic', sans-serif" }}
      >
        {/* BACKGROUND ISOTYPE WATERMARK */}
        <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <img 
            src={isotipo} 
            alt="" 
            className="w-[150vw] md:w-[80vw] max-w-[1200px] opacity-10 invert grayscale mix-blend-screen"
          />
        </div>
        {/* NAV */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-[#003347]/95 backdrop-blur-md border-b border-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
          }`}
          style={{ fontFamily: "'Big John PRO', sans-serif" }}
        >
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
            <Link to="/" className="flex items-center">
              <ImageWithFallback
                src={logotipo}
                alt="Boom Mamba Wave logo"
                className="w-auto object-contain"
                style={{ height: "113.385827px" }}
              />
            </Link>

            <ul className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
              {navItems.map((item) => (
                <li key={item.key}>
                  {item.key === 'Contact' ? (
                    <Link
                      to="/contact"
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={`/#${item.key.toLowerCase()}`}
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors"
              >
                <Globe size={16} />
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                href="/#templates"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2 bg-foreground text-background hover:bg-accent hover:text-white transition-colors"
              >
                {t.nav.browse} <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                className="text-foreground"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) =>
                item.key === 'Contact' ? (
                  <Link
                    key={item.key}
                    to="/contact"
                    className="text-2xl font-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.key}
                    href={`/#${item.key.toLowerCase()}`}
                    className="text-2xl font-light"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          )}
        </nav>

        <AnimatedRoutes lang={lang} t={t} />

        {/* GLOBAL CONTACT FORM */}
        <GlobalContactForm t={t} />

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href="https://wa.me/524922188690?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="WhatsApp"
        >
          <div className="relative">
            <div className="absolute -top-12 right-0 bg-foreground text-background text-xs font-medium px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {t.contact.whatsappTooltip}
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-foreground rotate-45" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(37,211,102,0.4)]" />
            </div>
          </div>
        </a>

        {/* FOOTER */}
        <footer className="border-t border-border px-6 md:px-12 py-10">
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <Link to="/">
              <ImageWithFallback
                src={logotipo}
                alt="Boom Mamba Wave logo"
                className="h-8 w-auto object-contain"
                style={{ height: "113.385827px" }}
              />
            </Link>

            <div className="flex flex-wrap gap-8 text-xs text-foreground/40 tracking-widest uppercase">
              {Object.keys(t.footer.links).map((key) => {
                const isRouterLink = key === "Privacy" || key === "Terms" || key === "Contact";
                return isRouterLink ? (
                  <Link key={key} to={`/${key.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {t.footer.links[key as keyof typeof t.footer.links]}
                  </Link>
                ) : (
                  <a key={key} href={`/#${key.toLowerCase()}`} className="hover:text-foreground transition-colors">
                    {t.footer.links[key as keyof typeof t.footer.links]}
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-foreground/30">
              {t.footer.rights}
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
