"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ContactHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact/contact-hero.png"
          alt="Lyold on set working with cinema camera"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 via-10% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-[15px] font-medium uppercase tracking-[0.38em] text-[#698675]">
            {"//Contact"}
          </p>

          <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
            Let’s Create
            <br />
            Something <span className="text-[#698675]">Cinematic.</span>{" "}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Whether it’s a commercial, documentary, branded visual, event, or
            creative collaboration, I’m always open to hearing the vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
