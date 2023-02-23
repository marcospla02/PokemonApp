import { getPokemons } from "./getPokemons";
import getPokemonsDb from "./getPokemonsDb";

export default async function getAllPokemons() {
  await getPokemons();
  const db = await getPokemonsDb();

  return db;
}
