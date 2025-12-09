import Button from "./buttons";
import Carte from "./carte";


export default function News() {
  return (
    <section className="container justify-between ">
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
}
