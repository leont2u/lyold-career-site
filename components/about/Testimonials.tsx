"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company?: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tatenda M.",
    role: "Creative Director",
    company: "Studio Project",
    quote:
      "Lyold brings more than technical skill to a production. He understands atmosphere, timing, and how to make a frame feel intentional.",
  },
  {
    id: 2,
    name: "Rumbidzai N.",
    role: "Producer",
    company: "Independent Film",
    quote:
      "Reliable, calm under pressure, and deeply focused on quality. Working with Lyold always feels collaborative and professional.",
  },
  {
    id: 3,
    name: "Tinashe K.",
    role: "Brand Strategist",
    company: "Campaign Production",
    quote:
      "He has a strong eye for cinematic storytelling and knows how to translate ideas into visuals that feel polished and emotionally grounded.",
  },
  {
    id: 4,
    name: "Chelsea D.",
    role: "Event Coordinator",
    company: "Live Experience",
    quote:
      "From planning to execution, Lyold handled the visual side with precision and clarity. The final work felt elevated and memorable.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function TestimonialsSection() {
  const featured = testimonials[0];
  const sideTestimonials = testimonials.slice(1);

  return (
    <section className="overflow-hidden bg-black py-24 text-white ">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-white/40">
            {"// Testimonials"}
          </p>

          <h2 className="text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl lg:text-7xl">
            What people
            <br />
            <span className="text-[#698675]">say about my work.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            A few words from collaborators, producers, and clients who have
            trusted me to help bring their vision to life.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Featured testimonial */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm sm:p-10 lg:min-h-115"
          >
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.08]">
              <Quote className="h-28 w-28 text-white" />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(105,134,117,0.18),transparent_35%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#8ba093]">
                  Featured Testimonial
                </p>

                <blockquote className="max-w-3xl text-2xl font-medium leading-normal text-white sm:text-3xl lg:text-[2.2rem]">
                  “{featured.quote}”
                </blockquote>
              </div>

              <div className="mt-12 border-t border-white/10 pt-6">
                <p className="text-lg font-semibold text-white">
                  {featured.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-white/45">
                  {featured.role}
                  {featured.company ? ` • ${featured.company}` : ""}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side stack */}
          <div className="flex flex-col gap-6">
            {sideTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/2 p-6 transition-colors hover:bg-white/4"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_45%)]" />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#8ba093]">
                      Client Note
                    </span>
                    <Quote className="h-5 w-5 text-white/20" />
                  </div>

                  <blockquote className="text-base leading-7 text-white/78 sm:text-lg">
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/42">
                      {item.role}
                      {item.company ? ` • ${item.company}` : ""}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom editorial strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-12 grid gap-4  pt-8 text-sm uppercase tracking-[0.22em] text-white/35 sm:grid-cols-3"
        >
          <div>Trusted by collaborators</div>
          <div>Built on precision & storytelling</div>
          <div className="text-[#698675]">Available for selected projects</div>
        </motion.div>
      </div>
    </section>
  );
}
