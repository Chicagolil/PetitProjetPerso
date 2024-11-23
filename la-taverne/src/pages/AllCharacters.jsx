import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function AllCharacters() {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";
  const [personnages, setPersonnages] = useState([]);
  const [bateau, setBateau] = useState(0);
  const pathImg = "src/assets/images/personnages/";

  async function recupererPersonnages() {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) {
        throw new Error(`Problème de connexion : ${reponse.status}`);
      }
      const donnees = await reponse.json();

      const persosAvecPath = donnees.map((elem) => ({
        ...elem,
        image: `${pathImg}${elem.image}`,
        from: "ApiData",
        side: elem.side_name,
      }));
      setPersonnages(persosAvecPath);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  }

  useEffect(() => {
    recupererPersonnages();
  }, [bateau]);

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Tout les personnsages</h1>
      <p
        className="text-2xl mb-6 text-center cursor-pointer"
        onClick={() => setBateau(bateau + 1)}
      >
        Rappeler tout les combattants de l'API
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {personnages.map((elem, index) => (
          <Card key={elem.id} infosPerso={elem} />
        ))}
      </div>
    </div>
  );
}
