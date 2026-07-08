import { Card, CardContent } from "@/components/ui/Card";

interface Props {
  nombre: string;
  cargo: string;
  bio: string;
  iniciales: string;
}

export function PersonCard({ nombre, cargo, bio, iniciales }: Props) {
  return (
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-700">
          {iniciales}
        </div>
        <h3 className="text-base font-semibold text-slate-900">{nombre}</h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{cargo}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
