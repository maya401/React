
import DivPartie from './partie'

export default function Private() {
  return (
    <div className="flex items-center justify-between container gap-6 mt-20">
         <img
              src="https://mhaecal.github.io/frontend/img/discussion.png" className="w-1/2 h-[300px] animate-fade-up"
              alt="fille"
            />
            <div  className="w-1/2 animate-rotate-x">
              <DivPartie
               
                titre="One-on-One"
                 sousTitre=" Discussions"
                description="Teachers and teacher assistants can talk with
                 students privately without leaving the Zoom environment."
              />
            </div>
           
          </div>
  )
}
