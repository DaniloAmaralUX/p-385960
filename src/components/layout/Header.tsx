
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center h-[62px] bg-[#121212] m-0 px-16 py-0 border-b border-[#1A1A1A] max-md:px-5">
      <div className="w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#121212"/>
          <path d="M16 28C16.8 28 17.5 27.3 17.5 26.5V22C17.5 21.2 16.8 20.5 16 20.5C15.2 20.5 14.5 21.2 14.5 22V26.5C14.5 27.3 15.2 28 16 28Z" fill="#34C759"/>
          <path d="M16 15C14.9 15 14 15.9 14 17C14 18.1 14.9 19 16 19C17.1 19 18 18.1 18 17C18 15.9 17.1 15 16 15Z" fill="#34C759"/>
          <path d="M16 4C15.2 4 14.5 4.7 14.5 5.5V10C14.5 10.8 15.2 11.5 16 11.5C16.8 11.5 17.5 10.8 17.5 10V5.5C17.5 4.7 16.8 4 16 4Z" fill="#34C759"/>
        </svg>
      </div>
      <nav className="flex items-center gap-8">
        <a href="#" className="text-white text-sm hover:text-[#34C759] transition-colors">Lorem</a>
        <a href="#" className="text-white text-sm hover:text-[#34C759] transition-colors">Lorem</a>
        <a href="#" className="text-white text-sm hover:text-[#34C759] transition-colors">Lorem lorem</a>
        <a href="#" className="text-white text-sm hover:text-[#34C759] transition-colors">Lorem</a>
        <Button 
          className="bg-[#34C759] hover:bg-[#2db14e] text-white text-sm font-medium px-4 py-1 rounded h-auto"
        >
          Lorem
        </Button>
      </nav>
    </header>
  );
}
