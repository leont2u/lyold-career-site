"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black lg:min-h-screen">
      <div className="absolute inset-0 z-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[70%]">
        <Image
          src="/projects/project-hero-image.png"
          alt="Lyold on set"
          fill
          priority
          className="object-cover object-center lg:object-contain lg:object-right"
        />

        <div className="absolute inset-0 bg-black/40 lg:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-black via-transparent to-transparent lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 via-40% to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent via-30%" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-end px-6 sm:px-10 lg:min-h-screen lg:items-center lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.4em] text-white/40">
            Selected Work
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            My Projects<span className="text-white/20">.</span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            From concept to execution, each project is crafted with movement,
            precision, and a cinematic eye.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
