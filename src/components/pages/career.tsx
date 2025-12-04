import { Link, Outlet } from "react-router-dom";
import type { career } from "../typage/types";

const careers: career[] =[
    {
        id:1,
        title:"Service one",
        description:"description service one",
        link: "/service-one",
    },
    {
        id:2,
        title:"Service two",
        description:"description service two",
         link: "/service-two",
    },
     {
        id:3,
        title:"Service three",
        description:"description service three",
         link: "/service-three",
    },
]

export default function CareerPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-800">Careers Page</h1>
      {careers.map((career) => (
        <div key={career.id} className="mb-6">
          <h2 className="text-2xl font-semibold text-purple-600">
            {career.title}
          </h2>
          <p>{career.description}</p>
          <Link
            to={`/careers/${career.link}`}
            className="text-purple-500 hover:underline"
          >
            Voir plus
          </Link>
        </div>
      ))}
      <Outlet />
    </div>
    
  );
}
 