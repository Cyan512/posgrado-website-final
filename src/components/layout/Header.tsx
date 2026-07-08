"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CommandMenu } from "./CommandMenu";
import Container from "./Container";
import { cn } from "@/lib/utils";

const programLinks = [
  {
    href: "/maestria",
    label: "Maestrías",
    description: "Especializate con programas diseñados para potenciar tu carrera profesional.",
  },
  {
    href: "/doctorado",
    label: "Doctorados",
    description: "Alcanzá el máximo nivel académico con nuestros programas de investigación.",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80" aria-label="Inicio">
            <BrandMark />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-sm font-medium",
                      pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Inicio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                  Programas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {programLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none rounded-lg p-3 transition-colors hover:bg-muted"
                          >
                            <div className="text-sm font-medium text-foreground">{link.label}</div>
                            <p className="text-xs leading-relaxed text-muted-foreground mt-0.5">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/admision"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-sm font-medium",
                      pathname === "/admision" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Admisión
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/sobre-la-escuela"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-sm font-medium",
                      pathname === "/sobre-la-escuela" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Sobre la escuela
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contacto"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-sm font-medium",
                      pathname === "/contacto" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    Contacto
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <CommandMenu />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/admision">Postular</Link>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <div className="mt-8 flex flex-col gap-1">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/maestria"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/maestria" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Maestrías
                  </Link>
                  <Link
                    href="/doctorado"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/doctorado" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Doctorados
                  </Link>
                  <Link
                    href="/admision"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/admision" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Admisión
                  </Link>
                  <Link
                    href="/sobre-la-escuela"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/sobre-la-escuela" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Sobre la escuela
                  </Link>
                  <Link
                    href="/contacto"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/contacto" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Contacto
                  </Link>
                  <Link
                    href="/preguntas-frecuentes"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === "/preguntas-frecuentes" ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    FAQ
                  </Link>
                  <div className="mt-4">
                    <Button asChild className="w-full" size="lg" onClick={() => setMobileOpen(false)}>
                      <Link href="/admision">Postular</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
