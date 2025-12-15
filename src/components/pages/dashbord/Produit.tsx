const produits = ["sacs", "chaussures", "bijoux", "habits"];

export default function ProduitPage() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen ">
      <div className="px-20 py-20 bg-amber-100 rounded-2xl ">
        <h3 className="text-3xl border-b-2">Liste des produits de l'entreprise</h3>
        <div >
          <ul className="grid grid-cols-2 mt-8 space-y-2">
            {produits.map((produit, index) => (
              <li key={index}>{produit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
