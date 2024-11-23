// importons nos besoins

import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import {
  addHardCharacters,
  addApiCharacters,
  addLocalCharacters,
} from "../services/contexteFunctions";
// on initialise le contexte, un "ensemble" d'informations qu'on va
// pouvoir diffuser dans l'application

export const CharactersContext = createContext();

// on crée le fournisseur/provider/distributeur

const CharactersContextProvider = ({ children }) => {
  const [valeurTest, setValeurTest] = useState(128);

  function doubleValeurTest() {
    setValeurTest(valeurTest * 2);
  }

  const [hardCharacters, setHardCharacters] = useState([]);
  const [apiCharacters, setApiCharacters] = useState([]);
  const [localCharacters, setLocalCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);

  useEffect(() => {
    addApiCharacters(setApiCharacters),
      addHardCharacters(setHardCharacters),
      addLocalCharacters(setLocalCharacters);
  }, []);

  useEffect(() => {
    setAllCharacters([...hardCharacters, ...apiCharacters, ...localCharacters]);
  }, [hardCharacters, apiCharacters, localCharacters]);
  return (
    <CharactersContext.Provider
      value={{
        valeurTest,
        setValeurTest,
        doubleValeurTest,
        hardCharacters,
        setHardCharacters,
        apiCharacters,
        setApiCharacters,
        localCharacters,
        setLocalCharacters,
        allCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
