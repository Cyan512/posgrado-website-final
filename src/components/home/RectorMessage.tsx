import { RECTOR } from "@/lib/data";
import Container from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/brand/RevealOnScroll";

export function RectorMessage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <RevealOnScroll>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[5/6] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-brand-50 to-muted lg:max-w-none">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600" />
              <div className="flex h-full flex-col items-center justify-center p-8">
                <div className="font-display text-[120px] leading-none italic text-brand-700">
                  {RECTOR.iniciales}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Rector
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Mensaje del Rector
              </p>
              <p className="mt-4 font-display text-2xl italic leading-relaxed text-slate-800 sm:text-3xl">
                &ldquo;{RECTOR.mensaje}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <div>
                  <p className="font-semibold text-slate-900">{RECTOR.nombre}</p>
                  <p className="text-sm text-muted-foreground">
                    {RECTOR.cargo} &middot; {RECTOR.ano}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
