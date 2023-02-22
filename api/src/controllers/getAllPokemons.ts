import Pokemon from "../db";
import { getPokemons } from "./getPokemons";

export default async function getAllPokemons() {
  await getPokemons();
  const result = await Pokemon.pokemon.findAll();

  return result;
}
