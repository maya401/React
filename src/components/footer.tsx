import Button from "./buttons";


export default function Footer() {
  return (
    <div>
      <>
        <section className="bg-[#252641] w-full h-[400px] mt-20 flex flex-col items-center ">
           <div className="flex items-center justify-center gap-20 container mb-14 ">
            <h3 className="text-white">SKILINE</h3>
            <p className="text-white">Virtual Class for Zoom</p>
           </div>

           <h3 className="text-white ">Subscribe to get our Newsletter</h3>

           <div className="gap-5 flex mt-5">
            <Button className=" bg-transparent px-10 py-2 rounded-full text-white border" text="Your email"/>
            <Button className="bg-[#4046D5] px-5 py-2 rounded-full text-white" text="SUBSCRIBE"/>
           </div>

        </section> 



      </>
    </div>
  )
}


