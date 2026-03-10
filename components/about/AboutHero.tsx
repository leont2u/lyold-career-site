"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/about-hero.JPG"
          alt="Lyold filming with children in community setting"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 via-35% to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent via-30%" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(white_0.6px,transparent_0.6px)] bg-size-[7px_7px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 sm:px-10 lg:items-center lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Visual Storytelling
          </h1>

          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            I believe every frame carries emotion. From documentary environments
            to commercial productions, my work is built around authenticity,
            human presence, and cinematic precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
