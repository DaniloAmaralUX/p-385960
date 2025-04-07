
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Responsive design",
    description: "Keep your workspace safe with security, compliance, analytics, and auditing tools.",
    icon: `<svg id="37:2250" layer-name="SVG" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="dev-icon"> <path d="M3.2982 20.8462H23.2412C23.9404 20.8462 24.5111 20.6331 24.9553 20.207C25.3995 19.781 25.6216 19.2102 25.6216 18.4948V3.36456C25.6216 2.65001 25.3995 2.07929 24.9553 1.65324C24.5111 1.22718 23.9404 1.01416 23.2412 1.01416H3.2982C2.58364 1.01416 2.01293 1.22718 1.58687 1.65324C1.16082 2.07929 0.947791 2.65001 0.947791 3.36456V18.4948C0.947791 19.2102 1.16082 19.781 1.58687 20.207C2.01293 20.6331 2.58364 20.8462 3.2982 20.8462ZM3.2982 16.3055V7.94323H23.2412V16.3055H3.2982ZM14.9267 24.0154C15.1889 24.0154 15.4185 23.9272 15.6155 23.7508C15.8124 23.5744 15.911 23.3735 15.911 23.148V20.8462H10.8799V23.148C10.8799 23.3735 10.9785 23.5744 11.1755 23.7508C11.3724 23.9272 11.602 24.0154 11.8642 24.0154H14.9267Z" fill="#F2F2F7"></path> </svg>`,
  },
  {
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: `<svg id="37:2257" layer-name="SVG" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="dev-icon"> <g clip-path="url(#clip0_37_2257)"> <path d="M9.74376 2.69791L13.0576 2.69791L16.2476 24.0314L12.9338 24.0314L9.74376 2.69791ZM1.8 15.0691L4.14175 12.5579L1.8 10.0466L3.66038 7.94141L7.85013 12.5579L3.66038 17.1743L1.8 15.0691ZM22.295 17.1743L18.1053 12.5579L22.295 7.94141L24.1554 10.0466L21.8136 12.5579L24.1554 15.0691L22.295 17.1743Z" fill="#F2F2F7"></path> </g> <defs> <clipPath id="clip0_37_2257"> <rect width="26" height="26" fill="white" transform="translate(0 0.03125)"></rect> </clipPath> </defs> </svg>`,
  },
  {
    title: "Mobile Development",
    description: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod te...",
    icon: `<svg id="37:2264" layer-name="SVG" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="dev-icon"> <path d="M18.8217 25.6304H7.20132C6.5629 25.6304 6.01991 25.4055 5.57236 24.9559C5.12263 24.5063 4.89777 23.9586 4.89777 23.313V2.74878C4.89777 2.10309 5.12263 1.55532 5.57236 1.10559C6.01991 0.656684 6.5629 0.432251 7.20132 0.432251H18.8217C19.4446 0.432251 19.9876 0.656684 20.4508 1.10559C20.9139 1.55532 21.1455 2.10309 21.1455 2.74878V23.313C21.1455 23.9586 20.9139 24.5063 20.4508 24.9559C19.9876 25.4055 19.4446 25.6304 18.8217 25.6304ZM13.0115 22.9809C13.2632 22.9809 13.4739 22.8952 13.6435 22.7237C13.8132 22.5522 13.898 22.3398 13.898 22.0863C13.898 21.8328 13.8132 21.6203 13.6435 21.4489C13.4739 21.2774 13.2632 21.1917 13.0115 21.1917C12.7598 21.1917 12.5473 21.2774 12.3741 21.4489C12.2008 21.6203 12.1142 21.8328 12.1142 22.0863C12.1142 22.3398 12.2 22.5522 12.3715 22.7237C12.5429 22.8952 12.7554 22.9809 13.0071 22.9809H13.0115Z" fill="#F2F2F7"></path> </svg>`,
  },
];

export function Services() {
  return (
    <section className="box-border bg-[#252525] m-0 px-52 py-20 max-md:px-5">
      <h2 className="box-border text-[36px] font-bold mb-[70px] m-0 p-0 max-md:mb-10 max-sm:text-[28px]">
        Our Services
      </h2>
      <div className="box-border grid grid-cols-3 gap-6 m-0 p-0 max-md:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, index) => (
          <div
            key={index}
            className="box-border bg-[#1E1E1E] m-0 px-8 py-6 rounded-xl border-2 border-solid border-[#2D2D2D]"
          >
            {service.icon && <div className="mb-[15px]" dangerouslySetInnerHTML={{ __html: service.icon }} />}
            <div className="box-border text-xl font-bold text-[#F2F2F7] mb-3.5 m-0 p-0">
              {service.title}
            </div>
            <div className="box-border text-base leading-[23px] m-0 p-0">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
