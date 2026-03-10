import ServicesGrid from "@/components/services/ServicesGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import WhyWorkWithMe from "@/components/services/WhyWorkWithMe";
import IdealForSection from "@/components/services/IdealForSection";
import ServiceHero from "@/components/services/ServicesHero";
import ServicesCta from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <ServiceHero />
      <ServicesGrid />
      <ServiceProcess />
      <WhyWorkWithMe />
      <IdealForSection />
      <ServicesCta />
    </main>
  );
}
