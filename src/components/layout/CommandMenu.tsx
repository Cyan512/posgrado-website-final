"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { GraduationCap, Microscope, Home, FileText, BookOpen, Phone, HelpCircle } from "lucide-react";
import { getTiposProgramas, getProgramasByTipo } from "@/lib/api";
import type { TipoPrograma, Programa } from "@/lib/types";

const navLinks = [
  { href: "/", label: "Inicio", icon: <Home className="h-4 w-4" /> },
  { href: "/admision", label: "Admisión", icon: <FileText className="h-4 w-4" /> },
  { href: "/sobre-la-escuela", label: "Sobre la escuela", icon: <BookOpen className="h-4 w-4" /> },
  { href: "/contacto", label: "Contacto", icon: <Phone className="h-4 w-4" /> },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes", icon: <HelpCircle className="h-4 w-4" /> },
];

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [tipos, setTipos] = useState<TipoPrograma[]>([]);
  const [programas, setProgramas] = useState<{ tipo: string; items: Programa[] }[]>([]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "K" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open && tipos.length === 0) {
      getTiposProgramas().then((t) => {
        setTipos(t);
        t.forEach((tipo) => {
          getProgramasByTipo(tipo.slug, { size: 50 }).then((r) => {
            setProgramas((prev) => {
              const existing = prev.findIndex((p) => p.tipo === tipo.slug);
              if (existing >= 0) {
                const copy = [...prev];
                copy[existing] = { tipo: tipo.slug, items: r.content };
                return copy;
              }
              return [...prev, { tipo: tipo.slug, items: r.content }];
            });
          });
        });
      });
    }
  }, [open, tipos.length]);

  const runCommand = useCallback(
    (command: () => void) => {
      setOpen(false);
      command();
    },
    []
  );

  const tipoIcons: Record<string, React.ReactNode> = {
    maestria: <GraduationCap className="h-4 w-4" />,
    doctorado: <Microscope className="h-4 w-4" />,
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
      >
        <span>Buscar...</span>
        <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
          ⌘K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar programas, páginas..." />
        <CommandList>
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Navegación">
            {navLinks.map((link) => (
              <CommandItem
                key={link.href}
                value={link.label}
                onSelect={() => runCommand(() => router.push(link.href))}
              >
                {link.icon}
                {link.label}
              </CommandItem>
            ))}
          </CommandGroup>
          {programas.map((group) => (
            <CommandGroup
              key={group.tipo}
              heading={group.tipo.charAt(0).toUpperCase() + group.tipo.slice(1)}
            >
              {group.items.slice(0, 8).map((p) => (
                <CommandItem
                  key={p.id}
                  value={p.nombre}
                  onSelect={() => runCommand(() => router.push(`/${group.tipo}/${p.slug}`))}
                >
                  {tipoIcons[group.tipo] ?? <GraduationCap className="h-4 w-4" />}
                  {p.nombre}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
