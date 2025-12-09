import DivPartie from "./partie";
import type { Type, TypeSection } from "./typage/types";

const Images: Type[] = [
  {
    src: "https://mhaecal.github.io/frontend/img/company/google.svg",
    alt: "google",
  },
  {
    src: "https://mhaecal.github.io/frontend/img/company/netflix.svg",
    alt: "netflix",
  },
  {
    src: "https://mhaecal.github.io/frontend/img/company/airbnb.svg",
    alt: "airbnb",
  },
  {
    src: "https://mhaecal.github.io/frontend/img/company/amazon.svg",
    alt: "amazone",
  },
  {
    src: "https://mhaecal.github.io/frontend/img/company/facebook.svg",
    alt: "facebook",
  },
  {
    src: "https://mhaecal.github.io/frontend/img/company/grab.svg",
    alt: "grab",
  },
];

const titre: TypeSection = {
  titre: "All-In-One",
  sousTitre: "Cloud Software.",
  description:
    "Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.",
};

export default function Partenaires() {
  return (
    <>
      <section className="flex flex-col items-center gap-6 mt-14 ">
        <div className="">
          <h1 className="text-[#9CA3AF]  ">
            Trusted by 5,000+ Companies Worldwide
          </h1>
        </div>

        <div className="">
          <ul className="  grid lg:grid-cols-6 grid-cols-3 gap-6   ">
            {Images.map((image, index) => (
              <li key={index}>
                <img src={image.src} alt={image.alt} className="w-[100px]" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 mt-20">
        <div className="my-24 text-center px-4 space-y-12">
          <DivPartie
            titre={titre.titre}
            sousTitre={titre.sousTitre}
            description={titre.description}
          />
        </div>
        
      </section>
    </>
  );
}

//flex gap-5 items-center
