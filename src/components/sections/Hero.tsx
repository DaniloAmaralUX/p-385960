
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex justify-between items-center gap-16 px-16 py-24 max-md:flex-col max-md:gap-12 max-md:px-5 max-md:py-16">
      <div className="max-w-[500px]">
        <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
          Secure IT Solutions for a more secure environment
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci...
        </p>
        <Button 
          className="bg-[#34C759] hover:bg-[#2db14e] text-white font-semibold px-10 py-3 rounded text-sm"
        >
          GET STARTED
        </Button>
      </div>
      <div className="w-[370px] h-[370px] flex items-center justify-center bg-[#1A1A1A] rounded-full max-sm:w-full max-sm:h-auto">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z" fill="#1A1A1A"/>
          <path d="M127.6 57.5C125.5 57.5 123.5 58.3 122 59.7C120.5 61.2 119.6 63.1 119.5 65.2V81.9C119.5 86.2 117.8 90.3 114.6 93.5C111.5 96.7 107.3 98.5 103 98.5V44.7C103 41.3 101.6 38 99.2 35.6C96.7 33.2 93.5 31.8 90 31.8C86.5 31.8 83.3 33.2 80.9 35.6C78.5 38 77.1 41.3 77.1 44.7V179.1C85.7 180.4 94.3 180.4 102.9 179.1V115.3C111.7 115.2 120.1 111.6 126.3 105.3C132.6 98.9 136 90.6 136 81.9V65.2C135.9 63 134.9 61 133.4 59.6C131.8 58.1 129.8 57.4 127.6 57.5Z" fill="#34C759"/>
          <path d="M76.7 44.7V131.7C72.3 131.7 68.2 129.9 65.1 126.8C62 123.6 60.3 119.5 60.3 115.2V98.5C60.1 96.3 59.2 94.3 57.6 92.9C56.1 91.4 54.1 90.7 52 90.7C49.8 90.7 47.9 91.4 46.3 92.9C44.8 94.3 43.9 96.3 43.7 98.5V115.2C43.7 123.9 47.1 132.2 53.4 138.5C59.7 144.9 68.1 148.4 76.8 148.5V179.2C81.2 179.8 85.6 180.1 90 180H90.5V31.8C88.8 31.8 87.2 32.1 85.6 32.7C84.1 33.4 82.7 34.3 81.6 35.5C80.5 36.6 79.6 38 79 39.6C78.3 41.2 77.9 42.9 77.9 44.6L76.7 44.7Z" fill="#34C759"/>
        </svg>
      </div>
    </section>
  );
}
