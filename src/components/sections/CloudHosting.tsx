
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    title: "Cloud databases",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
    icon: (
      <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M90 30C90 41.0457 81.0457 50 70 50C58.9543 50 50 41.0457 50 30C50 18.9543 58.9543 10 70 10C81.0457 10 90 18.9543 90 30Z" stroke="#34C759" strokeWidth="2"/>
        <path d="M40 45C40 51.0751 35.0751 56 29 56C22.9249 56 18 51.0751 18 45C18 38.9249 22.9249 34 29 34C35.0751 34 40 38.9249 40 45Z" stroke="#34C759" strokeWidth="2"/>
        <path d="M102 45C102 51.0751 97.0751 56 91 56C84.9249 56 80 51.0751 80 45C80 38.9249 84.9249 34 91 34C97.0751 34 102 38.9249 102 45Z" stroke="#34C759" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Website hosting",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="25" stroke="#34C759" strokeWidth="2"/>
        <path d="M30 15V30L40 40" stroke="#34C759" strokeWidth="2"/>
        <circle cx="30" cy="30" r="5" stroke="#34C759" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "File storage",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10H35L45 20V50H15V10Z" stroke="#34C759" strokeWidth="2"/>
        <path d="M35 10V20H45" stroke="#34C759" strokeWidth="2"/>
        <path d="M25 30H35" stroke="#34C759" strokeWidth="2"/>
        <path d="M25 40H35" stroke="#34C759" strokeWidth="2"/>
      </svg>
    ),
  },
];

export function CloudHosting() {
  return (
    <section className="px-16 mb-24 max-md:px-5">
      <h2 className="text-4xl font-bold mb-8">Cloud Hosting Services</h2>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="bg-[#1E1E1E] border border-[#2D2D2D]"
          >
            <CardHeader className="p-6 pb-2">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </CardHeader>
            <CardContent className="p-6 pt-2">
              <p className="text-gray-400 mb-8">{service.description}</p>
              <div className="flex justify-center">
                {service.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
