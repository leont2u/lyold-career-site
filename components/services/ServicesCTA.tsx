"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesCta() {
  return (
    <section className="bg-black py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-[36px] border border-white/10 bg-white/3 px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Next Step"}
          </p>

          <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-5xl lg:text-6xl">
            If the vision matters,
            <br />
            the execution should too.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            Let’s talk about the story, the scale, and the feeling you want the
            final work to carry.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/15 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:scale-[1.02]"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
