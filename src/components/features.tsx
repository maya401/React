import Button from "./buttons";
import DivPartie from "./partie";

export default function Features() {
  return (
    <>
    <div className="w-full  flex justify-center items-center">
        <Button
        className="px-5 py-2 rounded-full bg-transparent border-2 border-orange-300 text-orange-500 mt-16 transition transform hover:scale-110  "
        text="See more features"
      />
    </div>

    <div className="flex flex-col items-center gap-5 mt-20 container">
     
      <div className="flex justify-between">
        <div>
          <img
            src="https://mhaecal.github.io/frontend/img/integrations.png"
            alt=""
            className="w-[400px]"
          />
        </div>

        <div className=" flex flex-col justify-between gap-10">
            <div className="flex items-center gap-9">
                <span className="border w-[70px] border-gray-300"></span>
                <h3 className="text-gray-300 text-2xl">INTREGATION</h3>
            </div>
          <div>
            <DivPartie
              titre="200+ educational tools and platform"
              sousTitre="integrations"
              description="CSchoology has every tool your classroom needs and
                       comes pre-integrated with more than 200+ tools, 
                      student information systems (SIS), and education platforms."
            />
          </div>
          <div>
            <Button
              className="px-5 py-2 rounded-full bg-transparent transition transform hover:scale-110  border-2 border-orange-300 text-orange-500"
              text="See all integrations"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

 