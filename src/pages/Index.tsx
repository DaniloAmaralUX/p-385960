
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Header } from "@/components/layout/Header";
import { CloudHosting } from "@/components/sections/CloudHosting";
import { DesignDev } from "@/components/sections/DesignDev";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <Hero />
      <Features />
      <CloudHosting />
      <DesignDev />
      <ContactCTA />
    </div>
  );
};

export default Index;
