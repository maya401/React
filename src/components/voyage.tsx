import DivPartie from "./partie";



export default function Voyage() {
  return (
    <div  className="flex flex-col md:flex-row items-center justify-between container gap-6 mt-20">
         <img
        src="https://mhaecal.github.io/frontend/img/true-false.png" className="w-1/2 h-[300px]"
        alt="fille"
      />
        <div>
       <DivPartie
       titre="Assessments, "
        sousTitre="  Quizzes, Tests"
        description="Easily launch live assignments, quizzes, and tests.
         Student results are automatically entered in the online gradebook."
       
       />
        </div>
    </div>
  )
}
