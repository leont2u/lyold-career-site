"use client";

import { motion } from "framer-motion";

const points = [
  "Strong cinematic eye and technical awareness",
  "Comfortable across commercial, documentary, event, and branded work",
  "Focused on mood, precision, and clean execution",
  "Collaborative on set and intentional in preparation",
  "Able to balance storytelling with production discipline",
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-black py-24 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Why Work With Me"}
          </p>

          <h2 className="text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl">
            More than just
            <br />
            <span className="text-[#698675]">camera operation.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="space-y-5"
        >
          <p className="max-w-2xl text-lg leading-8 text-white/58">
            I approach every production with the mindset that the frame should
            serve something bigger — emotion, meaning, scale, atmosphere, or
            memory. The technical side matters, but the story always leads.
          </p>

          <div className="space-y-4 pt-4">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/2 px-5 py-4 text-sm uppercase tracking-[0.16em] text-white/78"
              >
                {point}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
