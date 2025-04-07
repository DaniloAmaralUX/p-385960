
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart3, Search, Heart } from "lucide-react";

const features = [
  {
    title: "Zero Configuration",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: <BarChart3 className="h-6 w-6 text-white" />,
  },
  {
    title: "Code Security",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: <Search className="h-6 w-6 text-white" />,
  },
  {
    title: "Team Management",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: <Heart className="h-6 w-6 text-white" />,
  },
];

export function Features() {
  return (
    <section className="flex justify-between gap-6 px-16 mb-24 max-md:px-5 max-md:flex-wrap max-sm:flex-col">
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className="bg-[#1E1E1E] border border-[#2D2D2D] w-full"
        >
          <CardHeader className="p-6 pb-2">
            {feature.icon}
            <h3 className="text-xl font-bold text-white mt-3">{feature.title}</h3>
          </CardHeader>
          <CardContent className="p-6 pt-2">
            <p className="text-gray-400">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
