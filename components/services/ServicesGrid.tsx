"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Plane,
  Focus,
  Film,
  ScanSearch,
} from "lucide-react";

const services = [
  {
    title: "Cinematography",
    icon: Camera,
    description:
      "Visual storytelling crafted with movement, mood, composition, and cinematic precision.",
  },
  {
    title: "1st AC / Focus Pulling",
    icon: Focus,
    description:
      "Reliable technical camera support with strong attention to sharpness, rhythm, and on-set discipline.",
  },
  {
    title: "Drone Operation",
    icon: Plane,
    description:
      "Aerial visuals that add scale, texture, and cinematic atmosphere to productions and campaigns.",
  },
  {
    title: "Commercial Production",
    icon: Clapperboard,
    description:
      "Branded visual work designed to make campaigns feel polished, emotionally grounded, and elevated.",
  },
  {
    title: "Documentary Visuals",
    icon: Film,
    description:
      "Authentic, human-centered image making built around real moments, environments, and stories.",
  },
  {
    title: "Creative Visual Direction",
    icon: ScanSearch,
    description:
      "Support from visual planning to execution, helping ideas take shape with clarity and intention.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesGrid() {
  return (
    <section className="bg-black py-24 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Core Services"}
          </p>

          <h2 className="text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            What I bring
            <br />
            <span className="text-[#698675]">to the production.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[28px] border border-white/10 bg-white/3 p-6 transition-colors hover:bg-white/5"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-[#698675]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/58">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
