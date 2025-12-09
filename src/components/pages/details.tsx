import { useParams } from "react-router-dom";



export default function DetailServices() {
const {service} = useParams();

  return (
    <div>
      <h2>Detail Services :{service}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus
        nobis architecto! Eaque quas vero sapiente aspernatur adipisci autem
        assumenda consequuntur minus quam. Distinctio, tempora. Amet porro est
        rerum vero.
      </p>
    </div>
  );
}
