import Card from "../components/Card";
import { useContext, useEffect } from "react";
import { CharactersContext } from "../context/CharactersContext";

export default function HomePage() {
  const {
    valeurTest,
    setValeurTest,
    doubleValeurTest,
    hardCharacters,
    setHardCharacters,
  } = useContext(CharactersContext);

  //  useEffect(() => {
  //    console.log(hardCharacters);
  //  }, [hardCharacters]);

  return (
    <>
      <div className="flex items-center justify-center gap-8 flex-wrap ">
        {hardCharacters.map((elem, index) => (
          <Card key={index} infosPerso={elem} />
        ))}
      </div>
      <p className="mt-6">Notre valeur test est de : {valeurTest} </p>
      <button
        onClick={() => setValeurTest(valeurTest + 5)}
        className="p-4 m-4 text-white rounded-lg bg-neutral-500 "
      >
        Valeur Test + 5
      </button>
      <button
        onClick={() => doubleValeurTest()}
        className="p-4 m-4 text-white rounded-lg bg-neutral-500 "
      >
        Double la Valeur Test{" "}
      </button>
    </>
  );
}
