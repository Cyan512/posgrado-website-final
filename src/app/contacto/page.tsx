import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { PageHero } from "@/components/brand/PageHero";
import { Card, CardContent } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";
import { Mail, MapPin, Phone, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Dirección",
    lines: ["Av. Universitaria 1801", "San Miguel, Lima — Perú"],
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Teléfono",
    lines: ["+51 1 626 2000", "Anexo 3300"],
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Correo electrónico",
    lines: ["posgrado@universidad.edu.pe", "admision.posgrado@universidad.edu.pe"],
  },
];

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "#" },
  { icon: <Instagram className="h-5 w-5" />, label: "Instagram", href: "#" },
  { icon: <Facebook className="h-5 w-5" />, label: "Facebook", href: "#" },
  { icon: <Youtube className="h-5 w-5" />, label: "YouTube", href: "#" },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        description="Completá el formulario y nos pondremos en contacto con vos a la brevedad. También podés visitarnos o llamarnos."
        stats={[
          { value: "48h", label: "Tiempo de respuesta" },
          { value: "L-V 8-18", label: "Horario de atención" },
        ]}
      />

      <Container className="py-8 sm:py-12">
        <Breadcrumb items={[{ label: "Contacto" }]} />
      </Container>

      <RevealOnScroll>
        <div className="pb-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6 sm:p-8">
                    <form className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                            Nombre completo
                          </label>
                          <Input id="name" name="name" required placeholder="Tu nombre" />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                            Correo electrónico
                          </label>
                          <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                          Asunto
                        </label>
                        <Input id="subject" name="subject" placeholder="¿En qué te podemos ayudar?" />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                          placeholder="Escribí tu consulta..."
                        />
                      </div>

                      <Button type="submit" size="lg">
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">{info.title}</h4>
                          {info.lines.map((line) => (
                            <p key={line} className="text-sm text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-brand-900 text-white">
                  <CardContent className="p-5">
                    <h4 className="text-sm font-semibold">Horario de atención</h4>
                    <p className="mt-1 text-sm text-brand-200">
                      Lunes a viernes: 8:00 — 18:00
                    </p>
                    <p className="text-sm text-brand-200">Sábados: 9:00 — 13:00</p>
                  </CardContent>
                </Card>

                <div className="flex items-center gap-3 px-1">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </RevealOnScroll>
    </>
  );
}
