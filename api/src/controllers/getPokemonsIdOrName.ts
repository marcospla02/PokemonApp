import axios from "axios";
import { SchemaPokemon } from "../assets/interfaces";
import getPokemonsIdInDb from "./getPokemonIdInDb";

export default async function getPokemonsIdOrName(
  id: number | string,
  name: string
) {
  try {
    let pokemons;
    //todo esto es para la api, tengoq ue hacer lo mismo para mi bbdd
    if (name) {
      pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    } else if (id) {
      pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    const poke: SchemaPokemon = await pokemons?.data;
    const infoPoke = {
      name: poke.name,
      life: poke.life,
      height: poke.height,
      weight: poke.weight,
      Attack: poke.stats[1].base_stat,
      Defense: poke.stats[2].base_stat,
      Speed: poke.stats[5].base_stat,
      types: poke.types.map((t) => t.type.name),
      img: poke.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    };
    return await infoPoke;
  } catch (error: any) {
    console.error("error in getPokemonsId:", error.message);
    return error.message;
  }
}
