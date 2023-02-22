import Pokemon from "../db";

export default function getPokemonsDb() {
  const db = Pokemon.pokemon.findAll();
  return db;
}
