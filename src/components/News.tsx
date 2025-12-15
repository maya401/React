
import { useEffect, useState } from "react";
import Button from "./buttons";
import type { PostType } from "./typage/types";
import Carte from "./carte";
// import type { blogType } from "./typage/types";

// const blog: blogType[] = [
//   {
//     id: 1,
//     src: "/téléchargement.jpeg",
//     title:
//       "latyr : Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//     description: "latyr Class Technologies Inc., the company that created Class,...",
//     tag: "latyr release",
//     link: "/detail",
//   },

//   {
//     id: 2,
//     src: "/laptop-news.png",
//     title:
//       "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//     description: "Class Technologies Inc., the company that created Class,...",
//     tag: "Press release",
//     link: "/detail",
//   },
//   {
//     id: 3,
//     src: "/children-laptop.png",
//     title:
//       "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//     description: "Class Technologies Inc., the company that created Class,...",
//     tag: "Press release",
//     link: "/detail",
//   },
//   {
//     id: 4,
//     src: "/cat-laptop.png",
//     title:
//       "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//     description: "Class Technologies Inc., the company that created Class,...",
//     tag: "Press release",
//     link: "/detail",
//   },
//   {
//     id: 1,
//     src: "/girl-laptop.png",
//     title:
//       "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
//     description: "Class Technologies Inc., the company that created Class,...",
//     tag: "Press release",
//     link: "/detail",
//   },
// ];


export default function News() {
  const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setPost(data);
      // setLoading(false)
      })
    },[]);

    // if(loading){
    //   return (
    //     <div className="flex items-center justify-center">
    //       <h1 className="text-3xl font-bold">Loading...</h1>
    //     </div>
    //   )
    // } else

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
          <img src={post[0]} alt={post[0]} className="object-cover rounded-3xl h-[300px] w-full" />
          <div className="bg-[#FCD34D] w-fit text-[#2F327D] rounded-full px-4 font-bold">
           {post[0]}
          </div>
          <div className=" w-4/5">
            <h2 className="text-[#1F2937] text-xl font-bold">
              {post[0]}
            </h2>
            <p className="text-[#7A808D] line-clamp-3">
              {post[0]}
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
                // src={item.src}
                // tag={item.tag}
                title={item.title}
                description={item.body}
                id={item.id}
                // link={item.link}
              />
          ))}
          
        </div>
      </div>
    </section>
  );
}







