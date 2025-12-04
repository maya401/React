import type { CardProps } from "./typage/types";




export default function Card({ title, content, icon,className }: CardProps) {
  return (
    <div className="shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 animate-fade-up ">
      <div className= {className} >
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

//"w-15 h-15 flex items-center justify-center bg-purple-700 rounded-full text-4xl text-white "