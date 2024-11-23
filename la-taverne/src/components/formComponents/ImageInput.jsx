import { useState, useEffect } from "react";

export default function ImageInput({ image, setImage }) {
  const url = "https://la-taverne.ducompagnon.fr/api/images";
  const [images, setImages] = useState([]);

  async function recupererImage() {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) {
        throw new Error(`Erreur couche transport, statut : ${reponse.status}`);
      }
      const donnees = await reponse.json();
      setImages(donnees);
    } catch (error) {
      console.error(`Erreur au niveau de la récupération de données ${error}`);
    }
  }

  useEffect(() => {
    recupererImage();
  }, []);

  return (
    <div>
      <label htmlFor="image" className="mb-2 block">
        Choisissez votre Avatar :
      </label>
      <select
        name="image"
        id="image"
        value={image}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
        onChange={(e) => setImage(e.target.value)}
      >
        <option value="">🔽Choisissez une option🔽</option>
        {images.map((elem) => (
          <option key={elem.name} value={elem.url}>
            {elem.name}
          </option>
        ))}
      </select>
    </div>
  );
}
