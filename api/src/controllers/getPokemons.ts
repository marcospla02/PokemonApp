import axios from "axios";
import { Poke, SchemaPokemon } from "../assets/interfaces";
import getPokemonsDb from "./getPokemonsDb";
import Pokemon from "../db";

export async function getPokemons() {
  try {
    const pokemons = await axios("https://pokeapi.co/api/v2/pokemon?limit=40");
    const infoApi = await pokemons.data.results.map(async (poke: Poke) => {
      const info = await axios(poke.url);
      return info;
    });
    const allInfoApi = await Promise.all(infoApi);

    const apiUrl = allInfoApi.reduce((prev, value) => {
      return prev.concat(value.data);
    }, []);

    const pokeInfo = await apiUrl.map((p: SchemaPokemon) => {
      const allPokeInfo = {
        name: p.name,
        life: p.stats[0].base_stat,
        height: p.height,
        weight: p.weight,
        Attack: p.stats[1].base_stat,
        Defense: p.stats[2].base_stat,
        Speed: p.stats[5].base_stat,
        types: p.types.map((t) => t.type.name),
        img: p.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
      };
      return allPokeInfo;
    });
    const infoDb = await getPokemonsDb();
    const allInfo = await pokeInfo.concat(infoDb);

    let num = 0;
    while (num < 1) {
      console.log("soy num antes:", num);
      num++;
      console.log("soy num desp:", num);
      return Pokemon.pokemon.bulkCreate(allInfo);
    }

    return Pokemon.pokemon.findOrCreate({
      where: { name: allInfo.map((p: SchemaPokemon) => p.name) },
    });
  } catch (error: any) {
    console.error(error.message);
    return error.message;
  }
}
