import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className = "" }: CardProps) {
  return (
    <div
      className={`box-border bg-[#1E1E1E] m-0 px-8 py-6 rounded-xl border-2 border-solid border-[#2D2D2D] ${className}`}
    >
      {icon && <div className="mb-[15px]">{icon}</div>}
      <div className="box-border text-xl font-bold text-[#F2F2F7] mb-3.5 m-0 p-0">
        {title}
      </div>
      <div className="box-border text-base leading-[23px] m-0 p-0">
        {description}
      </div>
    </div>
  );
}
