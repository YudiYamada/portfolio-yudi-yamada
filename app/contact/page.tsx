import Form from "@/components/form";
import { Mail, MapPinHouse, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} aria-hidden="true" />,
      label: "Phone",
      value: "+55 (91) 98957-3018",
      href: "tel:+5591989573018", // Link para discagem direta
    },
    {
      icon: <Mail size={24} aria-hidden="true" />,
      label: "Email",
      value: "yudiyamada10@gmail.com",
      href: "mailto:yudiyamada10@gmail.com", // Link para abrir cliente de e-mail
    },
    {
      icon: <MapPinHouse size={24} aria-hidden="true" />,
      label: "Address",
      value: "Bragança, Pará, Brasil",
      href: "https://www.google.com/maps/search/?api=1&query=Bragança,Pará,Brasil", // Link para o Maps
    },
  ];

  return (
    <section
      className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-10 lg:flex-row"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* LADO ESQUERDO: INFORMAÇÕES DE CONTATO */}
      <div className="flex flex-col gap-8 lg:w-1/3">
        <header className="space-y-4">
          <h1 id="contact-heading" className="text-4xl font-bold">
            Let&apos;s <span className="text-primary">work together</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-400">
            Did you like my work? Then get in touch so we can work together!
            I&apos;m currently available for new projects and opportunities.
          </p>
        </header>

        {/* Uso da tag <address> para SEO local e semântica */}
        <address className="space-y-6 not-italic">
          {contactInfo.map((item, index) => (
            <div key={index} className="group flex items-center gap-4">
              <div className="bg-foreground text-primary rounded-xl border border-white/5 p-4 shadow-lg transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={
                    item.label === "Address" ? "noopener noreferrer" : undefined
                  }
                  className="hover:text-primary text-lg font-medium text-white transition-colors focus:underline focus:outline-none"
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </address>
      </div>

      {/* LADO DIREITO: FORMULÁRIO */}
      <div className="bg-foreground flex flex-col gap-8 rounded-3xl border border-white/5 p-8 shadow-2xl lg:w-2/3">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
