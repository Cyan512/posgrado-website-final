"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),transparent_50%)]" />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm backdrop-blur"
          >
            <GraduationCap className="h-4 w-4 text-gold-500" />
            <span className="text-brand-200">Excelencia académica desde 1974</span>
          </motion.div>

          <h1 className="font-display text-4xl font-normal italic leading-tight text-white sm:text-5xl lg:text-6xl">
            Formá tu futuro con nuestros programas de{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-500">posgrado</span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-gold-500/20" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-200 sm:text-xl"
          >
            Explorá maestrías y doctorados diseñados para impulsar tu carrera
            profesional y académica al siguiente nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="h-11 px-8 bg-white text-brand-900 hover:bg-brand-50">
              <Link href="/maestria">Ver Maestrías</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-11 px-8 border-white/20 bg-white/[0.04] text-white hover:bg-white/10 hover:text-white backdrop-blur"
            >
              <Link href="/doctorado">Ver Doctorados</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { value: "50+", label: "Años de trayectoria" },
            { value: "25+", label: "Programas" },
            { value: "5,000+", label: "Graduados" },
            { value: "3", label: "Modalidades" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl italic text-gold-500 sm:text-4xl">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-brand-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
