
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F2F2F7]">
      <Hero />
      <Features />
      <Services />
    </div>
  );
};

export default Index;
