import { useEffect, useState } from "react";
import baseApi from "./BaseApi";
import { GiFastForwardButton } from "react-icons/gi";
import { GiFastBackwardButton } from "react-icons/gi";
import type { CommentType } from "./typage/types";

export default function Temoignage() {
  const [comments, setComments] = useState <CommentType[]> ([]);
 
  useEffect(() => {
    baseApi.get("/comments").then((res) => {
      setComments(res.data);
      
    });
  });

  const [index, setIndex] = useState(0);
  
  function handleClick() {
    if(index === comments.length -1){
        setIndex(0);
        return;
    }
    setIndex(index + 1);
       
   
  };

    function Precedent(){
        if (index === 0) {
        setIndex(comments.length - 1);
        return;
        }
        setIndex(index - 1);
        
        
  };


 
  return (
    <div>
      <div className="relative mb-20">
        <img
          src="/children-laptop.png"
          alt="image enfant"
          className=" w-[400px] h-[400px]  object-cover"
        />

        <GiFastForwardButton className="size-8  top-40 absolute right-0 text-amber-300"  onClick={handleClick} />
       
        <GiFastBackwardButton  className="size-8  top-40 absolute left-0 text-amber-300" onClick={Precedent}/>

        <div className="w-[400px]  max-w-[400px] h-[200px] max-h-[200px] rounded-lg bg-white absolute top-70 left-24 shadow-lg shadow-gray-600 ">
          <span className="bg-orange-600 rounded-lg h-full w-2 absolute top-0 left-0 "></span>
            <span className="bg-gray-400 rounded-lg h-30 w-0.5 absolute top-4 left-6  "></span>
          {comments.slice(2, 3).map((comment: CommentType) => (
            <p key={comment.id} className="flex flex-col gap-5 ml-10 mt-3"> " {comment.body} "<span>  name : " {comment.name} "</span> </p>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* 
           {
             comments.map((comment:CommentType) => 
             (
              <p key={comment.id}>{comment.body} 
               <span>{comment.name}</span>
                </p>
             
       ))
     }
       
        <span className="w-2 h-full"></span> */
}

//<div className="w-0.5 h-30 bg-gray-300 absolute top-7 left-8"></div> */}
//{/* <span className="bg-orange-600 rounded-lg w-3 h-full  absolute top-0 left-0  "></span>
