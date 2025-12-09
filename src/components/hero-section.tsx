import { FaPlay } from "react-icons/fa";
import Button from "./buttons";
 
export default function HeroSection() {
  return (
    <section className="flex justify-between gap-10 bg-[#FFF2E1] rounded-b-[150px] lg:flex-row flex-col  ">
      <div className="w-full flex flex-col items-star gap-6 p-16 lg:w-1/2">
        <h1 className=" md:text-7xl text-3xl text-[#2F327D] font-bold mb-3">
          <span className="text-[#F48C06] text-4xl ">Studying</span>
          Online is now <br /> much easier
        </h1>
        <p className="text-2xl">
            Skilline is an interesting platform that will teach
            <br /> you in more an interactive way
        </p>
        <div className="flex items-center gap-4">
            <Button className="bg-[#F48C06] rounded-full px-10 py-3 font-bold text-white transition transform hover:scale-110 " 
            text="Join for free " />
            <div className="flex items-center gap-5">
                <div className="bg-white px-2 py-2 rounded-full">  <FaPlay className="text-2xl text-blue-500  "/></div>
                 <span className="font-bold text-2xl">Watch how it works loremmmm</span> 
            </div>
           
        </div>
      </div>

      <div className="relative md:w-1/2 w-full ">
         <img src="https://mhaecal.github.io/frontend/img/girl.png" className="w-[400px] mx-auto   "/>

         <div className="absolute top-50 left-[60px] w-[200px]  animate-bounce">
            <img src="https://mhaecal.github.io/frontend/img/calendar.svg" alt=""/>
          </div>

          <div className="absolute bottom-20 left-10 w-[200px] animate-bounce">
            <img src="https://mhaecal.github.io/frontend/img/ux-class.svg" alt="IMAGES" />
          </div>

         <div className="absolute top-20 right-40 animate-bounce ">
            <svg
              viewBox="0 0 149 149"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 sm:h-24 "
            >
              <g filter="url(#filter0_d)">
                <rect
                  x="40"
                  y="32"
                  width="69"
                  height="69"
                  rx="14"
                  fill="#F3627C"
                ></rect>
              </g>
              <rect
                x="51.35"
                y="44.075"
                width="47.3"
                height="44.85"
                rx="8"
                fill="white"
              ></rect>
              <path
                d="M74.5 54.425V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              ></path>
              <path
                d="M65.875 58.7375L65.875 78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              ></path>
              <path
                d="M83.125 63.9125V78.575"
                stroke="#F25471"
                stroke-width="4"
                stroke-linecap="round"
              ></path>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="149"
                  height="149"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="8"></feOffset>
                  <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-40 right-20 animate-bounce">
            <img
              src="https://mhaecal.github.io/frontend/img/congrat.svg"
              alt=""
              className=" w-[200px] "
            />
          </div>
      </div>
      
    </section>
  );
}