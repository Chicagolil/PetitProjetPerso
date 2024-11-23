import Card from "../components/Card";

export default function HomePage() {
  const pathImg = "src/assets/images/personnages/";
  const toutLesPersonnages = [
    {
      image: pathImg + "heros.jpg",
      name: "Kikisan",
      health: 50,
      magic: 10,
      power: 40,
      from: "manualData",
      side: "light",
    },
    {
      image: pathImg + "magicienne.jpg",
      name: "Flobie",
      health: 40,
      magic: 60,
      power: 20,
      from: "manualData",
      side: "angel",
    },
  ];
  return (
    <>
      <h1 className="font-bold ">Coucou les loosers</h1>
      <div className="flex items-center justify-center gap-8 flex-wrap ">
        {toutLesPersonnages.map((elem, index) => (
          <Card key={index} infosPerso={elem} />
        ))}
      </div>
    </>
  );
}
