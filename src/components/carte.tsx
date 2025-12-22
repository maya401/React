import type { PostType } from "./typage/types";

export default function Carte({src, title, body, id}:PostType) {
  return (
   <section className="">
    <div className="flex justify-between space-x-5 space-y-5">
        <div className="relative ">
            <img src={src} alt="" className="object-cover w-[270px]"/>
            {/* <div className="bg-yellow-300 px-3 rounded-full absolute right-2 bottom-2">{title}</div> */}
        </div>
        <div>
            <h3 className="text-[#1F2937] font-bold"> {id} {title}</h3>
            <p className="text-[#737A87]">{body}</p>
        </div>
    </div>

   
   </section>
  )
}
