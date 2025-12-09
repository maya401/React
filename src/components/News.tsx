import Button from "./buttons";
import Carte from "./carte";
<<<<<<< HEAD
import type { blogType } from "./typage/types";

const blog: blogType[] = [
  {
    id: 1,
    src: "/téléchargement.jpeg",
    title:
      "latyr : Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "latyr Class Technologies Inc., the company that created Class,...",
    tag: "latyr release",
    link: "/detail",
  },

  {
    id: 2,
    src: "/laptop-news.png",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    tag: "Press release",
    link: "/detail",
  },
  {
    id: 3,
    src: "/children-laptop.png",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    tag: "Press release",
    link: "/detail",
  },
  {
    id: 4,
    src: "/cat-laptop.png",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    tag: "Press release",
    link: "/detail",
  },
  {
    id: 1,
    src: "/girl-laptop.png",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
    tag: "Press release",
    link: "/detail",
  },
];
=======

>>>>>>> b2f2c71 (correction)

export default function News() {
  return (
    <section className="container justify-between ">
<<<<<<< HEAD
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
          <img src={blog[0].src} alt={blog[0].title} className="object-cover rounded-3xl h-[300px] w-full" />
          <div className="bg-[#FCD34D] w-fit text-[#2F327D] rounded-full px-4 font-bold">
           {blog[0].tag}
          </div>
          <div className=" w-4/5">
            <h2 className="text-[#1F2937] text-xl font-bold">
              {blog[0].title}
            </h2>
            <p className="text-[#7A808D] line-clamp-3">
              {blog[0].description}
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
            blog.slice(1, 4).map((item) => (
              
              <Carte
                src={item.src}
                tag={item.tag}
                title={item.title}
                description={item.description}
                id={item.id}
                link={item.link}
              />
          ))}
          
        </div>
      </div>
    </section>
  );
=======
        <div className=" space-y-5 mt-20 mb-16 flex items-center flex-col justify-center animate-fade-up">
            <h2 className="text-4xl text-[#2F327D] text-center">Latest News and Resources</h2>
            <p className="text-[#7A808D] text-center">See the developments that have occurred to Skillines in the world</p>
        </div>

        <div className="flex justify-between gap-20 ">

            <div className="space-y-5">
              <img src="/laptop-news.png " alt=""  className="object-cover w-[400px]"/>
              <Button className="bg-[#FCD34D] text-[##2F327D] rounded-full px-4 font-bold" text="News"/>
              <p className="text-[#1F2937] font-bold">Class adds $30 million to its balance sheet for a <br /> Zoom-friendly edtech solution</p>
              <p className="text-[#7A808D]">Class, launched less than a year ago by Blackboard co-founder <br /> Michael Chasen, integrates exclusively...</p>
              <Button className="border-b text-[#374151]"  text="Read more"/>
            </div>

            <div className="">
              <Carte src="/children-laptop.png"
               tag="press release" 
               title="Class Technologies Inc. Closes $30 Million
                Series A Financing to Meet High Demand"
              description="Class Technologies Inc., the company that created Class,..."/>

              <Carte src="/girl-laptop.png"
               tag="news" 
               title="Zoom’s earliest investors are betting  millions on a better Zoom for schools"
              description="Zoom was never created to be a consumer product. Nonetheless, the..."/>

              <Carte src="/cat-laptop.png"
               tag="news" 
               title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
              description="This year, investors have reaped big financial returns from betting on Zoom..."/>
            </div>
        </div>
    </section>
  )
>>>>>>> b2f2c71 (correction)
}
