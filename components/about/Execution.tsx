"use client";

import { motion } from "framer-motion";

export default function ExecutionSection() {
  const projectTypesTop = [
    "High-Impact Videos",
    "Reels",
    "Short-form Content",
    "Commercials",
  ];

  const projectTypesBottom = [
    "Weddings",
    "TV Shows",
    "Documentaries",
    "Music Videos",
  ];

  const getMarqueeAnimation = (direction: "left" | "right") => ({
    x: direction === "left" ? [0, -1000] : [-1000, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 10,
        ease: "linear" as const,
      },
    },
  });

  return (
    <section className="overflow-hidden bg-black py-24">
      <div className="mx-auto mb-20 max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Execution"}
          </p>

          <h2 className="max-w-4xl text-5xl font-bold uppercase leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            Scaling vision across <br />
            <span className="text-[#698675]">every format & platform.</span>
          </h2>

          <div className="mt-10 max-w-xl border-l border-white/20 pl-6">
            <p className="text-lg leading-relaxed text-white/50">
              I partner with brands and directors to translate complex ideas
              into high-impact visual assets. From technical drone operations to
              narrative editing, the goal is always total immersion.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="select-none opacity-30">
        <div className="flex flex-col gap-8">
          <motion.div
            animate={getMarqueeAnimation("left")}
            className="flex whitespace-nowrap gap-16"
          >
            {[...projectTypesTop, ...projectTypesTop].map((item, idx) => (
              <span
                key={idx}
                className="cursor-default text-6xl font-bold uppercase tracking-tighter transition-colors duration-300 hover:text-[#698675] lg:text-6xl"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            animate={getMarqueeAnimation("right")}
            className="flex whitespace-nowrap gap-16"
          >
            {[...projectTypesBottom, ...projectTypesBottom].map((item, idx) => (
              <span
                key={idx}
                className="cursor-default text-6xl font-bold uppercase tracking-tighter transition-colors duration-300 hover:text-[#698675] lg:text-6xl"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
