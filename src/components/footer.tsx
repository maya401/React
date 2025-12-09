import Button from "./buttons";


export default function Footer() {
  return (
    <div>
      <>
        <section className="bg-[#252641] w-full h-[500px] mt-20 flex flex-col items-center ">
           <div className="flex items-center justify-center gap-20 container mb-14 mt-15 ">
            <h3 className="text-white ">SKILINE</h3>
            <p className="text-white border-l "> Virtual Class <br /> for Zoom</p>
           </div>

           <h3 className="text-white ">Subscribe to get our Newsletter</h3>

           <div className="gap-5 flex mt-5">
            <Button className=" bg-transparent px-10 py-2 rounded-full text-white border" text="Your email"/>
            <Button className="bg-[#4046D5] px-5 py-2 rounded-full text-white" text="SUBSCRIBE"/>
           </div>

           <div className=" mt-16 gap-4 space-x-4">
            <a href="#" className="text-[#9C9F93]  ">Career</a>
            <a href="#" className="text-[#9C9F93] border-l ">Privacy</a>
            <a href="#" className="text-[#9C9F93] border-l">Terms & condition</a>
           </div>

           <p className="text-[#9C9F93] ">© 2021 Class Technologies Inc.</p>

           <div className="mt-10">
            <p className="text-3xl text-white">Code By mhaecal</p>
            <p  className="text-3xl text-white">UI/UX By Irvan Moses</p>
           </div>

        </section> 



      </>
    </div>
  )
}


