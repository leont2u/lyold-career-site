"use client";

import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectsGrid from "@/components/projects/ProjectGrid";
import ProjectsHero from "@/components/projects/ProjectHero";
import { categories, projects } from "@/data/projects";
import { useMemo, useState } from "react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-black text-white">
      <ProjectsHero />
      <ProjectFilters
        categories={categories}
        activeCategory={activeCategory}
        onChangeCategory={setActiveCategory}
      />
      <ProjectsGrid projects={filteredProjects} />
    </main>
  );
}
