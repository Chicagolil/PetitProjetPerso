import { useState } from "react";

export default function SpreadOp() {
  const [tableau, setTableau] = useState([1, 2, 3]);
  const [personnes, setPersonnes] = useState({ name: "edouard ", age: 25 });

  return (
    <>
      <h1 className="text-4xl mb-6 text-center">Spread</h1>
      {tableau.map((elem, index) => (
        <p key={index}>{elem}</p>
      ))}
      <button
        className="bg-cyan-300 p-3 m-6"
        onClick={() => setTableau([...tableau, 4, 5, 6])}
      >
        Ajouter 4,5,6
      </button>
      <button
        className="bg-cyan-300 p-3 m-6"
        onClick={() =>
          setTableau([...tableau, tableau.length + 1, tableau.length + 2])
        }
      >
        Ajouter deux éléments
      </button>
      <hr />
      <p>
        Je m'apelle {personnes.name} et j'ai {personnes.age} ans
      </p>
      {personnes.ville && <p>J'habite {personnes.ville}</p>}

      <button
        className="bg-cyan-300 p-3 m-6"
        onClick={() => setPersonnes({ ...personnes, ville: "Rome" })}
      >
        Ajouter une ville
      </button>
    </>
  );
}
