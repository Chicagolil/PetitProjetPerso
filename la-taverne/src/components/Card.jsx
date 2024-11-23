import { useState } from "react";
import Statistiques from "./cardComponents/Statistiques";
import Button from "./Button";

export default function Card({ infosPerso }) {
  const Stats = [
    { stati: "Santé", valeure: infosPerso.health, unitee: "PV" },
    { stati: "Magie", valeure: infosPerso.magic, unitee: "PM" },
    { stati: "Puissance", valeure: infosPerso.power, unitee: "ATK" },
  ];
  return (
    <div
      className={`flex flex-col border-2 border-neutral-500 w-[250px] h-[400px] rounded-xl  overflow-hidden ${infosPerso.side}Shadow`}
    >
      <div className="w-[250px] h-[250px] overflow-hidden">
        <img
          src={infosPerso.image}
          alt={infosPerso.name}
          className="object-cover duration-300 hover:scale-105 "
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl  text-center">{infosPerso.name}</p>
          <p className="text-xs text-gray-400 opacity-80">{infosPerso.from}</p>
        </div>

        <div className="flex flex-col">
          {Stats.map((elem, index) => (
            <Statistiques
              key={index}
              stat={elem.stati}
              valeur={elem.valeure}
              unit={elem.unitee}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <Button couleur="bg-blue-500"> Défendre</Button>
          <Button couleur="bg-orange-500">Attaquer</Button>
        </div>
      </div>
    </div>
  );
}
