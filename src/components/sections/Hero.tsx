
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="box-border flex justify-between items-center gap-[100px] m-0 px-52 py-[100px] max-md:flex-col max-md:gap-[50px] max-md:px-5 max-md:py-[50px]">
      <div className="box-border max-w-[416px] m-0 p-0 max-md:max-w-full">
        <h1 className="box-border text-[45px] font-bold leading-[49px] tracking-[-1.21px] mb-[30px] m-0 p-0 max-sm:text-[32px] max-sm:leading-[38px]">
          Secure IT Solutions for a more secure environment
        </h1>
        <p className="box-border text-lg leading-6 mb-[45px] m-0 p-0 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor inci...
        </p>
        <Button 
          className="bg-[#34C759] hover:bg-[#2db14e] text-white font-semibold px-[46px] py-[11px] rounded-[5px]"
        >
          GET STARTED
        </Button>
      </div>
      <div className="box-border w-[370px] h-[370px] m-0 p-0 max-sm:w-full max-sm:h-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg id="43:3154" width="370" height="371" viewBox="0 0 370 371" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-icon"> <path d="M185 370C287.173 370 370 287.173 370 185C370 82.8273 287.173 0 185 0C82.8273 0 0 82.8273 0 185C0 287.173 82.8273 370 185 370Z" fill="#1E1E1E"></path> <path d="M262.248 118.189C257.93 118.195 253.773 119.83 250.607 122.766C247.441 125.703 245.499 129.725 245.168 134.031V168.282C245.158 177.229 241.648 185.817 235.389 192.209C229.129 198.602 220.616 202.291 211.672 202.488V91.9413C211.672 84.8919 208.871 78.1313 203.887 73.1467C198.902 68.162 192.141 65.3617 185.092 65.3617C178.043 65.3617 171.282 68.162 166.297 73.1467C161.313 78.1313 158.512 84.8919 158.512 91.9413V368.112C176.141 370.659 194.043 370.659 211.672 368.112V236.725C229.71 236.522 246.94 229.214 259.624 216.386C272.307 203.558 279.421 186.246 279.419 168.207V134.031C279.091 129.708 277.137 125.671 273.951 122.731C270.765 119.792 266.583 118.169 262.248 118.189Z" fill="#34C759"></path> <path d="M158.45 91.9413V270.719C149.491 270.545 140.957 266.866 134.68 260.471C128.403 254.075 124.884 245.474 124.878 236.513V202.262C124.518 197.984 122.564 193.997 119.403 191.091C116.242 188.186 112.106 186.573 107.813 186.573C103.519 186.573 99.3827 188.186 96.2221 191.091C93.0616 193.997 91.1076 197.984 90.7473 202.262V236.513C90.7501 254.539 97.8596 271.838 110.534 284.656C123.208 297.474 140.425 304.779 158.45 304.986V368.218C166.956 369.401 175.535 369.996 184.123 370H185.075V65.3617C181.58 65.3558 178.119 66.0389 174.889 67.372C171.659 68.705 168.724 70.6619 166.251 73.1307C163.778 75.5994 161.816 78.5315 160.477 81.7593C159.139 84.987 158.45 88.447 158.45 91.9413Z" fill="#34C759"></path> </svg>`,
          }}
        />
      </div>
    </section>
  );
}
