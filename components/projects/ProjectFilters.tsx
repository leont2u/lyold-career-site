"use client";

import { motion } from "framer-motion";

type ProjectFiltersProps = {
  categories: string[];
  activeCategory: string;
  onChangeCategory: (category: string) => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectFilters({
  categories,
  activeCategory,
  onChangeCategory,
}: ProjectFiltersProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <motion.button
                key={category}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => onChangeCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                  active
                    ? "border-white/20 bg-white text-black"
                    : "border-white/10 bg-white/4 text-white/70 hover:border-white/20 hover:bg-white/8 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
