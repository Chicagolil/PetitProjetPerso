import { useState, useEffect } from "react";

export default function SidesInput({ side, setSide }) {
  const [classes, setClasses] = useState([]);

  const url = "https://la-taverne.ducompagnon.fr/api/classes";

  async function fetchSides() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur http, statut : ${response.status}`);
      }
      const donnees = await response.json();
      setClasses(donnees);
    } catch (error) {
      console.error(`Erreur lors de la récupération des classes : ${error}`);
    }
  }

  useEffect(() => {
    fetchSides();
  }, []);

  return (
    <div>
      <label htmlFor="side" className="mb-2 block">
        Méchant ou gentil :
      </label>
      <select
        name="side"
        id="side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
        required
        className="border border-gray-300 rounded w-full p-2 mb-4"
      >
        <option value="">🔽Choisissez une option🔽</option>
        {classes.map((elem) => (
          <option key={elem.id} value={elem.side}>
            {elem.side}
          </option>
        ))}
      </select>
    </div>
  );
}
