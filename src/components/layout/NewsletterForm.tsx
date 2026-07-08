"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-emerald-400">
        <Check className="h-4 w-4" />
        ¡Gracias! Te mantendremos al tanto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
        className="h-9 flex-1 border-white/10 bg-white/10 text-white placeholder:text-white/40 focus:border-white/30"
      />
      <Button type="submit" size="sm" className="bg-white text-brand-900 hover:bg-brand-50 h-9">
        Suscribirse
      </Button>
    </form>
  );
}
