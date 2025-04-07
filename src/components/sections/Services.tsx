
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Monitor, Code, Smartphone } from "lucide-react";

const services = [
  {
    title: "Responsive design",
    description: "Keep your workspace safe with security, compliance, analytics, and auditing tools.",
    icon: <Monitor className="h-6 w-6 text-white" />,
  },
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: <Code className="h-6 w-6 text-white" />,
  },
  {
    title: "Mobile Development",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: <Smartphone className="h-6 w-6 text-white" />,
  },
];

export function Services() {
  return (
    <section className="bg-[#1A1A1A] px-16 py-20 mb-24 max-md:px-5">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="bg-[#1E1E1E] border border-[#2D2D2D]"
          >
            <CardHeader className="p-6 pb-2">
              {service.icon}
              <h3 className="text-xl font-bold text-white mt-3">{service.title}</h3>
            </CardHeader>
            <CardContent className="p-6 pt-2">
              <p className="text-gray-400">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
