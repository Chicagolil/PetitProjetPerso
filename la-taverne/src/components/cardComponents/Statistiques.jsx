import { useState } from "react";

export default function Statistiques({ stat, valeur, unit }) {
  const [valeurStat, setValeur] = useState(valeur);
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold">{stat} : </p>
        <div className="flex">
          <div
            className="cursor-pointer"
            onClick={() => setValeur(valeurStat + 5)}
          >
            🔼
          </div>
          <p>
            {valeurStat} {unit}
          </p>
          <div
            className="cursor-pointer"
            onClick={() => setValeur(valeurStat - 5)}
          >
            🔽
          </div>
        </div>
      </div>
    </div>
  );
}
