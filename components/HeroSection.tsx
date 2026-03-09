"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.png"
          alt="Lyold working with cinema camera on set"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/55 via-35% to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />

      {/* subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(white_0.6px,transparent_0.6px)] bg-size-[7px_7px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl">
            Lyold Ndebele
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Cinematographer",
              "1st AC",
              "Drone Operator",
              "Visual Storyteller",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full  bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:text-xs"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full  bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-white/65" />
            Harare, Zimbabwe
          </div>
        </motion.div>
      </div>
    </section>
  );
}
