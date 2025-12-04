import type { TypeSection } from "./typage/types";


export default function DivPartie( {titre, sousTitre, description}:TypeSection){
    return(
        <>
        <div className="space-y-6 max-w-xl mx-auto">
      <h2 className="text-[#2F327D] text-xl font-bold md:text-3xl">
        {" "}
        {titre} <span className="text-amber-500">{sousTitre} </span>
      </h2>
      <p className="text-[#9CA3AF] text-xl md:text-2xl">{description} </p>
    </div>
        </>
        
    )
}