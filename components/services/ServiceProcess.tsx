"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand the vision",
    text: "Every strong visual begins with clarity. I start by understanding the mood, story, audience, and outcome you want the work to carry.",
  },
  {
    number: "02",
    title: "Plan the execution",
    text: "From production structure to gear, movement, and coverage approach, the goal is to make execution feel intentional and efficient.",
  },
  {
    number: "03",
    title: "Capture with precision",
    text: "Whether on the ground or in the air, I focus on creating frames that feel clean, cinematic, and emotionally connected to the story.",
  },
  {
    number: "04",
    title: "Deliver work that lasts",
    text: "The result should not just look good in the moment — it should feel memorable, purposeful, and aligned with the bigger vision.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ServiceProcess() {
  return (
    <section className="border-t border-white/10 bg-black py-24 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Process"}
          </p>

          <h2 className="text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            How the work
            <br />
            <span className="text-[#698675]">comes together.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="rounded-[28px] border border-white/10 bg-white/2 p-6 sm:p-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#698675]">
                {step.number}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/58">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
