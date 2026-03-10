"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ServiceHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[80%]">
        <Image
          src="/services/services-hero-image.png"
          alt="Lyold on set during production"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />

        <div className="absolute inset-0 hidden bg-linear-to-r from-black via-black/40 to-transparent lg:block" />

        <div className="absolute inset-0 bg-black/60 lg:hidden" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 via-35% to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent via-40%" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] bg-[radial-gradient(white_0.6px,transparent_0.6px)] bg-size-[10px_10px]" />

      <div className="relative z-30 mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Cinematic Work,
            <br />
            Built With <span className="text-[#698675]">Intention.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
            From branded visuals to documentaries, event coverage, and aerial
            production, I help shape stories into frames that feel precise,
            immersive, and memorable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
