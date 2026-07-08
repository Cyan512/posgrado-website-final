import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "./Quote";

interface Props {
  cita: string;
  nombre: string;
  programa: string;
  ano: number;
  iniciales: string;
}

export function TestimonialCard({ cita, nombre, programa, ano, iniciales }: Props) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
          {iniciales}
        </div>
        <Quote text={cita} className="border-l-0 pl-0 flex-1" />
        <div className="mt-6 border-t border-border pt-4">
          <p className="text-sm font-semibold text-slate-900">{nombre}</p>
          <p className="text-sm text-muted-foreground">
            {programa} &middot; {ano}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
