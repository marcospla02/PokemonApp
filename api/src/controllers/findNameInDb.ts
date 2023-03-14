import { Pokemon, Type } from "../db";

export default async function findNameInDb(name: string) {
  try {
    const PokemonDb = await Pokemon.findOne({
      where: { name: name },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return PokemonDb;
  } catch (error: any) {
    return error.message;
  }
  // if (!PokemonDb) throw new Error("the name is not available");
}
