
import { useEffect, useState } from "react";
import Button from "./buttons";
import type { PostType } from "./typage/types";
import Carte from "./carte";


export default function News() {
  const [post, setPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setPost(data);
      setLoading(false)
      });
    },[]);

    if(loading){
      return (
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      )
    } 

      return (
    <section className="container justify-between ">
      <div className=" space-y-5 mt-20 mb-16 flex items-center flex-col justify-center animate-fade-up">
        <h2 className="text-4xl text-[#2F327D] text-center">
          Latest News and Resources
        </h2>
        <p className="text-[#7A808D] text-center">
          See the developments that have occurred to Skillines in the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-5">

          <img src={"/girl-laptop.png"}
           alt={post[0].title}
           className="object-cover rounded-3xl h-[300px] w-full" />

          <div className="bg-[#FCD34D] w-fit text-[#2F327D] rounded-full px-4 font-bold">
           {post[0].id}
          </div>

          <div className=" w-4/5">
            <h2 className="text-[#1F2937] text-xl font-bold">
              {post[0].title}
            </h2>
            <p className="text-[#7A808D] line-clamp-3">
              {post[0].body}
            </p>
          </div>
          <Button
            link="/detail"
            className="border-b cursor-pointer text-[#374151]"
            text="Read more"
          />
          
        </div>

        <div className="">
          {
            post.slice(1, 4).map((item: PostType) => (
              
              <Carte
                src={"/children-laptop.png"}
                title={item.title}
                body={item.body}
                id={item.id}
                
              />
          ))}
          
        </div>
      </div>
    </section>
  );
}







