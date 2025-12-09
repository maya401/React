import type { blogType } from "./typage/types";

export default function Carte({src, title, description, tag, link}:blogType) {
  return (
    <a href={link} className="flex justify-between space-x-5 space-y-5">
        <div className="relative ">
            <img src={src} alt="" className="object-cover w-[270px]"/>
            <div className="bg-yellow-300 text-xs md:text-sm px-3 rounded-full absolute right-2 bottom-2">{tag}</div>
        </div>
        <div>
            <h3 className="text-[#1F2937] font-bold">{title}</h3>
            <p className="text-[#737A87]">{description}</p>
        </div>
    </a>
  )
}
