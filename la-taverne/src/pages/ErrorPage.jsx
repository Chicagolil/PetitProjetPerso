import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Mip Mip Erreur</h1>
      <Link to="/">
        <p className="text-xl text-center">Retour à l'acceuil</p>
      </Link>
    </div>
  );
}
