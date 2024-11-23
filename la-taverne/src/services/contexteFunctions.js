const pathImg = "src/assets/images/personnages/";
import { nanoid } from "nanoid";

export function addHardCharacters(setHardCharacters) {
  setHardCharacters([
    {
      id: nanoid(6),
      image: pathImg + "heros.jpg",
      name: "Kikisan",
      health: 50,
      magic: 10,
      power: 40,
      from: "manualData",
      side: "light",
    },
    {
      id: nanoid(6),
      image: pathImg + "magicienne.jpg",
      name: "Flobie",
      health: 40,
      magic: 60,
      power: 20,
      from: "manualData",
      side: "angel",
    },
  ]);
}

export async function addApiCharacters(setApiCharacters) {
  const url = "https://la-taverne.ducompagnon.fr/api/personnages";

  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Problème de connexion : ${reponse.status}`);
    }
    const donnees = await reponse.json();

    const persosAvecPath = donnees.map((elem) => ({
      ...elem,
      id: nanoid(6),
      image: `${pathImg}${elem.image}`,
      from: "ApiData",
      side: elem.side_name,
    }));
    setApiCharacters(persosAvecPath);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
}

export function addLocalCharacters(setLocalCharacters) {
  setLocalCharacters(JSON.parse(localStorage.getItem("personnages")) || []);
}
