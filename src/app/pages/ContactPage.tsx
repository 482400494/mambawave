import { ArrowUpRight, Phone, Send } from "lucide-react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function ContactPage({
  t,
}: {
  t: {
    contact: {
      subtitle: string;
      title1: string;
      title2: string;
      title3: string;
      browse: string;
      call: string;
      formTitle: string;
      formName: string;
      formEmail: string;
      formMessage: string;
      formSend: string;
      formSent: string;
      whatsappTooltip: string;
    };
    legal: { back: string };
  };
}) {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-screen-xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-foreground/50 hover:text-accent transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        {t.legal.back}
      </Link>

      {/* HEADER */}
      <div className="text-center mb-20">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--accent)" }}
        >
          {t.contact.subtitle}
        </p>
        <h1
          className="text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.1] font-black tracking-tight mb-12"
          style={{ fontFamily: "'UM Cloft', serif", color: "#328aa0" }}
        >
          {t.contact.title1}
          <br />
          <span className="text-foreground/20">{t.contact.title2}</span>
          <br />
          {t.contact.title3}
        </h1>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contacto@boommambawave.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase hover:bg-accent hover:text-white transition-colors duration-200"
          >
            contacto@boommambawave.com <ArrowUpRight size={15} />
          </a>
          <a
            href="https://wa.me/524922188690?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20mi%20consulta%20gratuita%20de%2015%20minutos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white text-sm font-medium tracking-widest uppercase hover:bg-accent/80 transition-colors duration-200"
          >
            <Phone size={15} />
            {t.contact.call}
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-6 mb-20">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs tracking-[0.3em] uppercase text-foreground/30">
          {t.contact.formTitle}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-lg mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem("name") as HTMLInputElement)
              .value;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;
            const mailto = `mailto:contacto@boommambawave.com?subject=Contacto de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`;
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
            className="w-full px-5 py-4 bg-[#003347] border border-border text-foreground text-sm tracking-wide placeholder:text-foreground/30 focus:border-accent focus:outline-none transition-colors"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={t.contact.formEmail}
            className="w-full px-5 py-4 bg-[#003347] border border-border text-foreground text-sm tracking-wide placeholder:text-foreground/30 focus:border-accent focus:outline-none transition-colors"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t.contact.formMessage}
            className="w-full px-5 py-4 bg-[#003347] border border-border text-foreground text-sm tracking-wide placeholder:text-foreground/30 focus:border-accent focus:outline-none transition-colors resize-none"
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
