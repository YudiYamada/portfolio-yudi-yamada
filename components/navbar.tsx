"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Abrir Menu"
          className="text-text z-500 p-2 hover:cursor-pointer"
        >
          <Menu />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      )}

      <ul
        className={`bg-foreground border-desactive border-2 md:border-none fixed top-0 right-0 z-40 flex h-screen w-4/6 flex-col items-end gap-8 rounded-tl-3xl rounded-bl-3xl px-3 py-3 transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:gap-8 md:bg-transparent md:transition-none`}
      >
        <button
          onClick={closeMenu}
          aria-label="Fechar Menu"
          className="text-text z-500 hover:cursor-pointer md:hidden"
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
                className={`hover:text-primary overflow-y-auto text-3xl transition duration-700 ease-in-out hover:cursor-pointer md:overflow-y-hidden md:text-2xl lg:text-3xl ${
                  isActive ? "text-primary" : "text-text"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
