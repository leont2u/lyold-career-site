"use client";

import { motion } from "framer-motion";

const idealFor = [
  "Brands building premium visual campaigns",
  "Directors looking for technical and cinematic collaboration",
  "Producers who need reliable on-set camera support",
  "Events that require elevated visual coverage",
  "Documentary work rooted in real people and environments",
  "Projects that need aerial scale and visual depth",
];

export default function IdealForSection() {
  return (
    <section className="border-t border-white/10 bg-black py-24 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Ideal For"}
          </p>

          <h2 className="text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            Best suited for
            <br />
            <span className="text-[#698675]">vision-led projects.</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {idealFor.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="rounded-3xl border border-white/10 bg-white/2 p-5 text-base leading-7 text-white/70"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
