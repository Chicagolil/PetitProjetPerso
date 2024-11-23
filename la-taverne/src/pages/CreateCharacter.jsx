import { useState } from "react";
import SidesInput from "../components/formComponents/SidesInput";
import ImageInput from "../components/formComponents/ImageInput";
import ClassicInput from "../components/formComponents/ClassicInput";
import { toast } from "sonner";
import { nanoid } from "nanoid";

export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [health, setHealth] = useState("");
  const [magic, setMagic] = useState("");
  const [power, setPower] = useState("");
  const [side, setSide] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    //Création
    const newCharacter = {
      id: nanoid(6),
      name,
      image,
      health: parseInt(health),
      magic: parseInt(magic),
      power: parseInt(power),
      side,
      from: "LocalCharacter",
    };
    if (health <= 0) {
      toast.error("La Santé doit uniquement être positive");
      return;
    } else if (magic <= 0) {
      toast.error("La Magie doit uniquement être positive");
      return;
    } else if (power <= 0) {
      toast.error("La Puissance doit uniquement être positive");
      return;
    }
    const oldCharacters = JSON.parse(localStorage.getItem("personnages")) || [];
    const oldLength = oldCharacters.length;
    oldCharacters.push(newCharacter);
    localStorage.setItem("personnages", JSON.stringify(oldCharacters));
    const newLength = oldCharacters.length;

    if (oldLength < newLength) {
      toast.success("Personnage crée avec succès");
    } else {
      toast.error("Il y a eu un problème, veuillez réesayer");
    }
    setName("");
    setImage("");
    setHealth("");
    setMagic("");
    setPower("");
    setSide("");
  }

  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Création d'un personnage</h1>
      <form
        onSubmit={handleSubmit}
        className="p-4 border border-gray-300 rounded"
      >
        <ClassicInput value={name} fonction={setName} type="text" infos="name">
          Nom :
        </ClassicInput>

        <ImageInput image={image} setImage={setImage} />

        <ClassicInput
          value={health}
          fonction={setHealth}
          type="number"
          infos="health"
        >
          Santé :
        </ClassicInput>
        <ClassicInput
          value={magic}
          fonction={setMagic}
          type="number"
          infos="magic"
        >
          Magie :
        </ClassicInput>
        <ClassicInput
          value={power}
          fonction={setPower}
          type="number"
          infos="power"
        >
          Puissance :
        </ClassicInput>
        <SidesInput side={side} setSide={setSide} />
        <button
          type="submit"
          className="p-2 rounded bg-blue-500 text-white hover:opacity-90 duration-300 "
        >
          Créer le personnage
        </button>
      </form>
    </div>
  );
}
