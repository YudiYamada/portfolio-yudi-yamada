"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageToggleButton from "./language-toggle-button";

const Nav = () => {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: t("Home"), href: "/" },
    { name: t("Services"), href: "/services" },
    { name: t("About"), href: "/about" },
    { name: t("Projects"), href: "/projects" },
    { name: t("Contact"), href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label={t("OpenMenu")}
          className="text-text z-500 hover:cursor-pointer"
        >
          <Menu size={50} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <ul
        className={`bg-foreground border-desactive fixed top-0 right-0 z-40 flex h-screen w-4/6 flex-col items-end gap-8 rounded-tl-3xl rounded-bl-3xl border-2 px-3 py-3 transition-transform duration-500 ease-in-out lg:border-none ${isOpen ? "translate-x-0" : "translate-x-full"} lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:gap-8 lg:bg-transparent lg:transition-none`}
      >
        <button
          onClick={closeMenu}
          aria-label={t("CloseMenu")}
          className="text-text z-500 hover:cursor-pointer lg:hidden"
        >
          <X size={50} />
        </button>

        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className={`hover:text-primary overflow-y-auto text-4xl transition duration-700 ease-in-out hover:cursor-pointer md:overflow-y-hidden lg:text-2xl ${
                  isActive ? "text-primary" : "text-text"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <p className="text-2xl lg:hidden border-t-2 border-desactive pt-5">{t("Language")}</p>
        <LanguageToggleButton className="lg:hidden space-x-2 text-3xl flex-col flex sm:flex-row" />
      </ul>
    </nav>
  );
};

export default Nav;
