
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="px-16 pb-24 max-md:px-5">
      <div className="bg-[#1E1E1E] border border-[#2D2D2D] rounded-lg p-16 text-center relative overflow-hidden max-md:p-8">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 10C60 10 75 25 90 40C105 55 110 70 110 70" stroke="#34C759" strokeWidth="2"/>
            <path d="M60 10C60 10 45 25 30 40C15 55 10 70 10 70" stroke="#34C759" strokeWidth="2"/>
            <path d="M60 30C60 30 70 40 80 50C90 60 95 70 95 70" stroke="#34C759" strokeWidth="2"/>
            <path d="M60 30C60 30 50 40 40 50C30 60 25 70 25 70" stroke="#34C759" strokeWidth="2"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4 mt-8">Ready to Talk?</h2>
        <p className="text-gray-400 mb-4">
          Our team is here to answer your question about StartP
        </p>
        <a href="#" className="text-[#34C759] block mb-8">Contact Us</a>
        <Button 
          className="bg-[#34C759] hover:bg-[#2db14e] text-white font-semibold px-10 py-3 rounded text-sm"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
}
