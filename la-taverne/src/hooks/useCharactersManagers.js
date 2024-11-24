import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
export function useCharacterManager() {
  const {
    allCharacters,
    setAllCharacters,
    hardCharacters,
    setHardCharacters,
    apiCharacters,
    setApiCharacters,
    localCharacters,
    setLocalCharacters,
  } = useContext(CharactersContext);

  function findCharacterById(id) {
    const sources = [
      { data: hardCharacters, from: "manualData" },
      { data: apiCharacters, from: "ApiData" },
      { data: localCharacters, from: "LocalCharacter" },
    ];
    for (const { data, from } of sources) {
      const character = data.find((elem) => elem.id === id);
      if (character) {
        return { character, from };
      }
    }
  }

  function updateCharacter(id, updatedCharacter) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("personnages")) || [];
    const characterIndex = storedCharacters.findIndex((char) => char.id === id);
    if (characterIndex !== -1) {
      storedCharacters[characterIndex] = {
        ...storedCharacters[characterIndex],
        ...updatedCharacter,
      };
      localStorage.setItem("personnages", JSON.stringify(storedCharacters));
      setLocalCharacters(storedCharacters);
    } else {
      console.error("Personnage non trouvé ");
    }
  }

  function deleteCharacterFromLocalStorage(id) {
    const storedCharacters =
      JSON.parse(localStorage.getItem("personnages")) || [];

    const updateStoredCharacters = JSON.stringify(
      storedCharacters.filter((elem) => elem.id !== id)
    );
    localStorage.setItem("personnages", updateStoredCharacters);
  }

  function deleteCharacter(id) {
    const characterData = findCharacterById(id);
    if (!characterData) {
      console.error("Personnage non trouvé");
      return;
    }

    const { character, from } = characterData;

    switch (from) {
      case "manualData": {
        const updateCharacters = hardCharacters.filter(
          (elem) => elem.id !== id
        );
        setHardCharacters(updateCharacters);
        break;
      }

      case "ApiData": {
        const updateCharacters = apiCharacters.filter((elem) => elem.id !== id);
        setApiCharacters(updateCharacters);
        break;
      }

      case "LocalCharacter": {
        const updateCharacters = localCharacters.filter(
          (elem) => elem.id !== id
        );
        setLocalCharacters(updateCharacters);
        deleteCharacterFromLocalStorage(id);
        break;
      }
      default:
        console.error("Provenance inconnue pour le personnage ", character);
    }
  }

  return { deleteCharacter, findCharacterById, updateCharacter };
}
