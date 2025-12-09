import type { blogType } from "./typage/types";

// const blog:blogType = [
//     { src: "/children-laptop.png",
//       title:"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//       description:"Class Technologies Inc., the company that created Class,...",
//       tag:"Press release"
//     },
//     { src: "/children-laptop.png",
//       title:"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//       description:"Class Technologies Inc., the company that created Class,...",
//       tag:"Press release"
//     },
//     { src: "/children-laptop.png",
//       title:"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//       description:"Class Technologies Inc., the company that created Class,...",
//       tag:"Press release"
//     },
// ]




export default function Carte({src, title, description, tag}:blogType) {
  return (
   <section className="">
    <div className="flex justify-between space-x-5 space-y-5">
        <div className="relative ">
            <img src={src} alt="" className="object-cover w-[270px]"/>
            <div className="bg-yellow-300 px-3 rounded-full absolute right-2 bottom-2">{tag}</div>
        </div>
        <div>
            <h3 className="text-[#1F2937] font-bold">{title}</h3>
            <p className="text-[#737A87]">{description}</p>
        </div>
    </div>

   
   </section>
  )
}
