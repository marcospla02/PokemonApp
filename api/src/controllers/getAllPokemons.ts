import { getPokemons } from "./getPokemons";
import getPokemonsDb from "./getPokemonsDb";

export default async function getAllPokemons() {
  await getPokemons();
  try {
    const db = await getPokemonsDb();

    return db;
  } catch (error: any) {
    return error.message;
  }
}
