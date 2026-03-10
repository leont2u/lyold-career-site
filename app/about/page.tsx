"use client";

import AboutHero from "@/components/about/AboutHero";
import ExecutionSection from "@/components/about/Execution";
import TestimonialsSection from "@/components/about/Testimonials";

export default function ProjectsPage() {
  return (
    <main className="bg-black text-white">
      <AboutHero />
      <ExecutionSection />
      <TestimonialsSection />
    </main>
  );
}
