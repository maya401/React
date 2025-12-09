import Button from "./buttons";
import DivPartie from "./partie";
import Temoignage from "./Temoingange";
// import { Images } from "./typage/donnees";


export default function Testimony() {
  return (
    <div>
       <>
          {/* <div className="w-full  flex justify-center items-center">
              <Button
              className="px-5 py-2 rounded-full bg-transparent border-2 border-orange-300 text-orange-500 mt-16 transition transform hover:scale-110  "
              text="See more features"
            />
          </div> */}
      
          <div className="flex items-center gap-5 mt-20 ml-14">
           
            <div className="flex justify-between">
              
      
              <div className=" flex flex-col justify-between gap-10">
                  <div className="flex items-center gap-9">
                      <span className="border w-[70px] border-gray-300"></span>
                      <h3 className="text-gray-300 text-2xl">TESTIMONIAL</h3>
                  </div>
                <div>
                  <DivPartie
                    titre="What They Say?"
                    sousTitre=" "
                    description="Skilline has got more than 100k positive ratings from our
                     users around the world.Some of the students and teachers were greatly
                      helped by the Skilline.Are you too? Please give your assessment."
                  />
                </div>
                <div>
                  <Button
                    className="px-5 py-2 rounded-full bg-transparent transition transform hover:scale-110 border-2 border-orange-300 text-orange-500"
                    text="Write your assessment"
                  />
                </div>
              </div>
            </div>

            <Temoignage/>
          </div>
          </>
    </div>
  )
}
