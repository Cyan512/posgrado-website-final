"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CommandMenu } from "./CommandMenu";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const panel1Links = [
  { num: "01", label: "Inicio", href: "/" },
  { num: "02", label: "Maestrías", href: "/maestria" },
  { num: "03", label: "Doctorados", href: "/doctorado" },
];

const panel2Links = [
  { num: "04", label: "Admisión", href: "/admision" },
  { num: "05", label: "Sobre la escuela", href: "/sobre-la-escuela" },
  { num: "06", label: "Contacto", href: "/contacto" },
];

function NavLink({
  num,
  label,
  href,
  onClick,
}: {
  num: string;
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <li className="border-b border-white/[0.08]">
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
      >
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[1.5px] text-white/25 min-w-[20px]">
            {num}
          </span>
          <span className="font-display text-[28px] font-light text-white leading-none group-hover:text-white/40 transition-colors duration-200">
            {label}
          </span>
        </div>
        <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
          &rarr;
        </span>
      </Link>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-8 h-16 bg-[#f0ede8] border-b border-black/[0.08]">
        {/* LEFT: Menú button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex items-center gap-2.5"
        >
          <span
            className={cn(
              "text-[11px] font-medium tracking-[1.5px] uppercase text-gray-800 transition-opacity duration-300",
              open ? "opacity-0" : "opacity-100"
            )}
          >
            Menú
          </span>
          <div className="relative w-[22px] h-[10px]">
            <span
              className={cn(
                "absolute top-0 left-0 h-px bg-gray-800 transition-all duration-[400ms]",
                open ? "w-5 translate-y-[5px] rotate-45" : "w-[22px]"
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px bg-gray-800 transition-all duration-[400ms]",
                open ? "w-5 -rotate-45" : "w-[14px]"
              )}
            />
          </div>
        </button>

        {/* CENTER: Logo */}
        <Link
          href="/"
          onClick={close}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2.5"
        >
          <Image
            src="/logo.svg"
            alt="Escuela de Posgrado"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div>
            <p className="text-[12px] text-gray-800 tracking-[0.3px] leading-tight">
              Escuela de Posgrado
            </p>
            <p className="text-[10px] text-gray-400 tracking-[0.5px]">
              UNMSM · Lima, Perú
            </p>
          </div>
        </Link>

        {/* RIGHT: ⌘K */}
        <CommandMenu />
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 grid grid-cols-1 md:grid-cols-3 transition-opacity duration-500",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Panel 1 — brand-800 */}
        <div
          className={cn(
            "bg-brand-800 flex flex-col justify-end px-6 md:px-8 pb-8 pt-20 transition-transform duration-[550ms]",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mb-8 space-y-1">
            <p className="text-[9px] tracking-[2.5px] uppercase text-white/30 mb-2">
              Universidad Nacional Mayor de San Marcos
            </p>
            <h2 className="font-display text-[38px] md:text-[42px] font-light italic text-white leading-[1.1] tracking-tight">
              Escuela de<br />
              <span className="not-italic font-normal">Posgrado</span>
            </h2>
          </div>

          <div className="h-px bg-white/10" />

          <ul>
            {panel1Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
            <li className="border-b border-white/[0.08] md:hidden">
              <Link
                href="/admision"
                onClick={close}
                className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
              >
                <span className="font-display text-[28px] font-light text-white leading-none group-hover:text-white/40">
                  Admisión
                </span>
                <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  &rarr;
                </span>
              </Link>
            </li>
            <li className="border-b border-white/[0.08] md:hidden">
              <Link
                href="/sobre-la-escuela"
                onClick={close}
                className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
              >
                <span className="font-display text-[28px] font-light text-white leading-none group-hover:text-white/40">
                  Sobre la escuela
                </span>
                <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  &rarr;
                </span>
              </Link>
            </li>
            <li className="border-b border-white/[0.08] md:hidden">
              <Link
                href="/contacto"
                onClick={close}
                className="group flex items-center justify-between py-[13px] hover:pl-1.5 transition-all duration-[250ms]"
              >
                <span className="font-display text-[28px] font-light text-white leading-none group-hover:text-white/40">
                  Contacto
                </span>
                <span className="text-sm text-white/20 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  &rarr;
                </span>
              </Link>
            </li>
          </ul>

          <Link
            href="/admision"
            onClick={close}
            className="md:hidden flex items-center justify-between w-full bg-white/10 hover:bg-white/20 text-white px-4 py-3.5 text-[11px] font-medium tracking-[1.5px] uppercase transition-colors mt-4"
          >
            <span>Proceso de Admisión</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          <p className="hidden md:block text-[9px] tracking-[3px] uppercase text-white/15 mt-6">
            UNMSM · {new Date().getFullYear()}
          </p>
        </div>

        {/* Panel 2 — brand-900 (desktop only) */}
        <div
          className={cn(
            "hidden md:flex bg-brand-900 flex-col justify-end px-8 pb-8 pt-20 transition-transform duration-[550ms] delay-[60ms]",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mb-8">
            <p className="text-[9px] tracking-[2.5px] uppercase text-white/30 mb-2">
              Formación académica
            </p>
            <h2 className="font-display text-[30px] font-light italic text-white leading-[1.1] tracking-tight">
              Programas<br />
              <span className="not-italic font-normal">&amp; Admisión</span>
            </h2>
          </div>
          <div className="h-px bg-white/10" />
          <ul>
            {panel2Links.map((link) => (
              <NavLink key={link.href} {...link} onClick={close} />
            ))}
          </ul>
        </div>

        {/* Panel 3 — brand-950 (desktop only) */}
        <div
          className={cn(
            "hidden md:flex bg-brand-950 flex-col justify-end px-8 pb-8 pt-20 transition-transform duration-[550ms] delay-[120ms]",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="mb-6 space-y-4">
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">
                Correo
              </p>
              <p className="text-[12px] text-white/50 font-light">
                posgrado@universidad.edu.pe
              </p>
            </div>
            <div className="h-px bg-white/[0.08]" />
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">
                Teléfono
              </p>
              <p className="text-[12px] text-white/50 font-light">
                +51 1 626 2000
              </p>
            </div>
            <div className="h-px bg-white/[0.08]" />
            <div>
              <p className="text-[9px] tracking-[2px] uppercase text-white/25 mb-1">
                Dirección
              </p>
              <p className="text-[12px] text-white/50 font-light leading-relaxed">
                Av. Universitaria 1801<br />
                San Miguel, Lima — Perú
              </p>
            </div>
          </div>
          <div className="h-px bg-white/10" />
          <Link
            href="/admision"
            onClick={close}
            className="flex items-center justify-between w-full bg-brand-800 hover:bg-brand-700 text-white px-4 py-3.5 text-[11px] font-medium tracking-[1.5px] uppercase transition-colors mt-4"
          >
            <span>Proceso de Admisión</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
