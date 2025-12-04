import DivPartie from "./partie";


export default function Management() {
  return (
    <div className="flex items-center justify-between container gap-6 mt-20">
         <div  className="w-1/2">
           <DivPartie
            
             titre="Class Management"
              sousTitre=" Tools for Educators  "
             description="Class provides tools to help run and manage
              the class such as Class Roster, Attendance, and more. 
             With the Gradebook, teachers can review and grade tests and quizzes in real-time."
           />
         </div>
         <img
           src="https://mhaecal.github.io/frontend/img/gradebook.png" className="w-1/2 h-[300px]"
           alt="fille"
         />
       </div>
  );

}