import { Pokemon, Type } from "../db";

export default async function getPokemonsIdInDb(id: string) {
  try {
    const pokemon = await Pokemon.findOne({
      where: { id: id },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (!pokemon) throw new Error("the id was not found");

    return pokemon;
  } catch (error: any) {
    console.log("Error in pokemonDb:", error.message);
    return error.message;
  }
}
