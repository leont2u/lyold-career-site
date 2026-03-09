"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0a0a0a]"
    >
      <div className="relative aspect-[1.15/1] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-[0.8]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-90" />

        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/75 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        <div className="absolute inset-0 hidden bg-black/60 p-5 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:block md:opacity-0">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                {project.client}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h3>
            </div>

            <div>
              <p className="text-sm leading-6 text-white/75">
                {project.description}
              </p>

              <div className="mt-4 space-y-1 text-xs uppercase tracking-[0.18em] text-white/55">
                <p>Role: {project.role}</p>
                <p>Location: {project.location}</p>
                <p>Year: {project.year}</p>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
              >
                View Full Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
          {project.client}
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/55">{project.role}</p>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white hover:text-black"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
