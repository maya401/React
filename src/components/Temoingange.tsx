import { useState } from "react";
import { Images } from "./typage/donnees";
import { GiFastForwardButton } from "react-icons/gi";
import { GiFastBackwardButton } from "react-icons/gi";

export default function Temoignage() {
  const [index, setIndex] = useState(0);
  
  function handleClick() {
    if(index === Images.length -1){
        setIndex(0);
        return;
    }
    setIndex(index + 1);
        console.log(index);
  };

    function Precedent(){
        if (index === 0) {
        setIndex(Images.length - 1);
        return;
        }
        setIndex(index - 1);
        console.log(index);
  };

 
  const temoignages = Images[index];

  return (
    <div className="relative w-1/2">
      <img src={temoignages.url} alt={temoignages.alt} className="w-[400px] object-cover relative"/>
      
        {/* <button
        className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer top-40 absolute "
        onClick={Precedent} 
      >
        precedent
      </button> */}
      <GiFastBackwardButton className="size-8 text-gray-100 top-40 absolute"
               onClick={Precedent} />
      
      {/* <button
        className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer top-40 absolute right-51"
        onClick={handleClick}
      >
        Suivant
      </button> */}
      <GiFastForwardButton 
       className="size-8 text-gray-100  top-40 absolute right-51"
               onClick={handleClick}
       />

      <div className=" px-30 py-17 rounded-lg bg-white absolute top-70 left-24 shadow-lg shadow-gray-600">
        <span className="bg-orange-800 rounded-lg  px-2 py-20 absolute top-0 left-0 "></span>

        <p>" {temoignages.temoignage} "</p>

      </div>
    </div>
  );
}
