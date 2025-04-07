
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Monitor, Users, Smartphone, Layers } from "lucide-react";

const devServices = [
  {
    title: "Responsive design",
    description: "Keep your workspace safe with security, compliance, analytics, and auditing tools.",
    icon: <Monitor className="h-6 w-6 text-white" />,
  },
  {
    title: "Android apps development",
    description: "Give employees access to Notion through your identity provider using SAML-based SSO.",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    title: "React web development",
    description: "Delegate admin-level users to manage workspace membership.",
    icon: <Monitor className="h-6 w-6 text-white" />,
  },
  {
    title: "Laravel web development",
    description: "Keep your workspace safe with security, compliance, analytics, and auditing tools.",
    icon: <Monitor className="h-6 w-6 text-white" />,
  },
  {
    title: "iOS apps development",
    description: "Give employees access to Notion through your identity provider using SAML-based SSO.",
    icon: <Smartphone className="h-6 w-6 text-white" />,
  },
  {
    title: "UX/UI design",
    description: "Delegate admin-level users to manage workspace membership.",
    icon: <Layers className="h-6 w-6 text-white" />,
  },
];

export function DesignDev() {
  return (
    <section className="px-16 mb-24 max-md:px-5">
      <h2 className="text-4xl font-bold mb-8 max-md:text-3xl max-sm:text-2xl">Design & Development</h2>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {devServices.map((service, index) => (
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
