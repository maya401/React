import DivPartie from "./partie";

export default function Tools() {
  return (
    <div className="flex items-center justify-between container gap-6 mt-20">
      <div  className="w-1/2">
        <DivPartie
          titre="Tools"
          sousTitre="  For Teachers And Learners"
          description="Class has a dynamic set of teaching tools
         built to be deployed and used during class. Teachers can
          handout assignments in real-time for students to complete and submit."
        />
      </div>
      <img
        src="https://mhaecal.github.io/frontend/img/girl-with-books.png" className="w-1/2 h-[300px]"
        alt="fille"
      />
    </div>
  );
}
