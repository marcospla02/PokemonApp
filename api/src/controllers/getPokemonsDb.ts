import Pokemon from "../db";
import Type from "../db";

export default async function getPokemonsDb() {
  const db = await Pokemon.pokemon.findAll({
    attributes: [
      "name",
      "life",
      "height",
      "weight",
      "Attack",
      "Defense",
      "Speed",
      "img",
    ],
    include: {
      model: Type.poke_type,
      attributes: ["name"],
      through: {
        // this is the relationship with Pokemon and poke_type
        attributes: [],
      },
    },
  });
  // console.log("soy en db:", db);
  return db;
}
