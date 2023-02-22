import Pokemon from "../db";
import Type from "../db";

export default async function getPokemonsIdInDb(id: string) {
  try {
    const pokemon = await Pokemon.pokemon.findAll({
      where: {
        id: id,
      },
      include: {
        model: Type.poke_type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    console.log("soy pokemonDb:", pokemon);

    return pokemon;
  } catch (error: any) {
    console.log("Error in pokemonDb:", error.message);
    return error.message;
  }
}
