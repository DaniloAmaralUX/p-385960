
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Header } from "@/components/layout/Header";
import { CloudHosting } from "@/components/sections/CloudHosting";
import { DesignDev } from "@/components/sections/DesignDev";
import { ContactCTA } from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white w-full">
      <Header />
      <main className="w-full max-w-[1440px] mx-auto">
        <Hero />
        <Features />
        <CloudHosting />
        <DesignDev />
        <ContactCTA />
      </main>
    </div>
  );
};

export default Index;
