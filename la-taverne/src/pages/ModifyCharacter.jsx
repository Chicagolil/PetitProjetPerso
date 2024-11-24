import { useNavigate, useParams } from "react-router-dom";
import { useCharacterManager } from "../hooks/useCharactersManagers";
import { useEffect, useState } from "react";
import ClassicInput from "../components/formComponents/ClassicInput";
import ImageInput from "../components/formComponents/ImageInput";
import SidesInput from "../components/formComponents/SidesInput";
import { toast } from "sonner";

export default function ModifyCharacter() {
  const { id } = useParams();
  const { findCharacterById, updateCharacter } = useCharacterManager();
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    health: "",
    magic: "",
    power: "",
    side: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const foundCharacter = findCharacterById(id);
    console.log(foundCharacter);

    if (!foundCharacter) {
      toast.error("Personnage non trouvé");
      navigate("/");
    } else setCharacter(foundCharacter.character);
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  }
  function handleSave(e) {
    e.preventDefault();
    updateCharacter(character.id, character);
    toast.success("Le personnage a bien été modifié");
    navigate("/personnages-locaux");
  }
  return (
    <div>
      <h1 className="text-4xl mb-6 text-center">Modifier {character.name} </h1>
      <form
        onSubmit={handleSave}
        className="p-4 border border-gray-300 rounded"
      >
        <ClassicInput
          value={character.name}
          fonction={(value) =>
            handleChange({ target: { name: "name", value } })
          }
          type="text"
          infos="name"
        >
          Nom :
        </ClassicInput>

        <ImageInput
          image={character.image}
          setImage={(value) =>
            handleChange({ target: { name: "image", value } })
          }
        />

        <ClassicInput
          value={character.health}
          fonction={(value) =>
            handleChange({ target: { name: "health", value } })
          }
          type="number"
          infos="health"
        >
          Santé :
        </ClassicInput>
        <ClassicInput
          value={character.magic}
          fonction={(value) =>
            handleChange({ target: { name: "magic", value } })
          }
          type="number"
          infos="magic"
        >
          Magie :
        </ClassicInput>
        <ClassicInput
          value={character.power}
          fonction={(value) =>
            handleChange({ target: { name: "power", value } })
          }
          type="number"
          infos="power"
        >
          Puissance :
        </ClassicInput>
        <SidesInput
          side={character.side}
          setSide={(value) => handleChange({ target: { name: "side", value } })}
        />
        <button
          type="submit"
          className="p-2 rounded bg-blue-500 text-white hover:opacity-90 duration-300 "
        >
          Modifier le personnage
        </button>
      </form>
    </div>
  );
}
