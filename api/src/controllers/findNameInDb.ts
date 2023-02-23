import { Pokemon, Type } from "../db";

export default async function findNameInDb(name: string) {
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
  if (!PokemonDb) throw new Error("the name is not available");
  return PokemonDb;
}
