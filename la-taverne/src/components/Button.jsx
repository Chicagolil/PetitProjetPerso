import { Children } from "react";

export default function Button({ children, couleur, fonctionOnclick }) {
  return (
    <button
      className={`px-2 py-1 ${couleur} border-2 border-2 border-neutral-400 rounded hover:border-neutral-700 hover:opacity-90 duration-300`}
      onClick={fonctionOnclick}
    >
      {children}
    </button>
  );
}
