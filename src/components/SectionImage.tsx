import Button from "./buttons";
import DivPartie from "./partie";

export default function What() {
  return (
    <div className="container text-center">
     <DivPartie
     titre="What is"
     sousTitre="Skilline?"
     description="Skilline is a platform that allows educators to create online classes whereby they can store
      the course materials online; manage assignments, quizzes and exams;monitor due dates; grade 
      results and provide students with feedback all in one place."
     
     />

      <div className="block items-center md:flex md:gap-10 justify-between gap-6 my-24 animate-fade-up">
        <div className="bg-[url(https://mhaecal.github.io/frontend/img/Rectangle%2019.png)]  bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5">
        <h3 className="text-3xl font-bold text-white">FOR INSTRUCTORS</h3>
        <Button className="bg-transparent border  rounded-full px-5 py-2 text-white" text="Start class today"/>
        </div>

        <div className="bg-[url(https://mhaecal.github.io/frontend/img/Rectangle%2021.png)] bg-center bg-no-repeat bg-cover w-full h-[300px] flex items-center justify-center flex-col gap-5">
        <h3 className="text-3xl font-bold  text-white">FOR Students</h3>
        <Button className="bg-[#28B0DB] text-white rounded-full px-5 py-2" text="entrez access code"/>
        </div>
      </div>
    </div>
  );
}