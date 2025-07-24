"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Welcome", href: "/welcome" },
  { label: "Our Solutions", href: "/solutions" },
  { label: "Why Profixx", href: "/why-profixx" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}

export default function Navbar({
  backgroundColor = "bg-transparent",
  textColor = "text-white",
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className={clsx("flex items-center justify-between px-6 py-4", backgroundColor, textColor)}>
        {/* Logo + Agency Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo_3.png"
            alt="Profixx Logo"
            className="w-7 h-7 object-contain"
          />
          <div className="text-2xl font-bold">Profixx</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            // Determine if this is the current page
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "hover:opacity-80 transition-colors text-lg",
                  isActive
                    ? "font-bold"
                    : textColor
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className={clsx("md:hidden focus:outline-none cursor-pointer hover:opacity-80", textColor)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          {
            "opacity-100 pointer-events-auto": isOpen,
            "opacity-0 pointer-events-none": !isOpen,
          }
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside
        className={clsx(
          "fixed top-0 right-0 h-full w-64 bg-gray-200 z-50 text-gray-900 transform transition-transform duration-300 ease-in-out p-6 flex flex-col",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end mb-4 text-gray-800 focus:outline-none hover:text-gray-600 cursor-pointer"
        >
          <X size={28} />
        </button>

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "text-lg py-2 transition-colors",
                isActive
                  ? "font-bold text-black"
                  : "text-gray-800 hover:text-gray-500"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </aside>
    </header>
  );
}
