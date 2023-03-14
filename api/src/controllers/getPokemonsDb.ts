import { Pokemon, Type } from "../db";

export default async function getPokemonsDb() {
  try {
    const db = await Pokemon.findAll({
      attributes: [
        "id",
        "idPoke",
        "name",
        "life",
        "height",
        "weight",
        "Attack",
        "Defense",
        "Speed",
        "img",
        "typesApi",
      ],
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          // this is the relationship with Pokemon and poke_type
          attributes: [],
        },
      },
    });

    // console.log("soy en db:", db);
    return db;
  } catch (error: any) {
    return error.message;
  }
}
