import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { SectionHeader } from "@/components/brand/SectionHeader";
import { Card, CardContent } from "@/components/ui/Card";
import { Mail, MapPin, Phone } from "lucide-react";
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
    lines: [
      "posgrado@universidad.edu.pe",
      "admision.posgrado@universidad.edu.pe",
    ],
  },
];

export default function ContactoPage() {
  return (
    <Container className="py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Contacto" }]} />

      <SectionHeader
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        description="Completá el formulario y nos pondremos en contacto con vos a la brevedad. También podés visitarnos o llamarnos."
        align="left"
        className="!mx-0 mt-6 !max-w-none"
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
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
                    rows={4}
                    required
                    className="block w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Escribí tu consulta..."
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
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
        </div>
      </div>
    </Container>
  );
}
