"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project.types";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="mx-auto max-w-8xl px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
      <motion.div
        layout
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
