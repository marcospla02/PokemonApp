// import axios from "axios";
// import { Poke, SchemaPokemon } from "../assets/interfaces";
// import { Pokemon } from "../db";

// let num = 0;

// export async function getPokemons() {
//   try {
//     const pokemons = await axios("https://pokeapi.co/api/v2/pokemon?limit=100");
//     const infoApi = await pokemons.data.results.map(async (poke: Poke) => {
//       const info = await axios(poke.url);
//       return info;
//     });
//     const allInfoApi = await Promise.all(infoApi);

//     const apiUrl = allInfoApi.reduce((prev, value) => {
//       return prev.concat(value.data);
//     }, []);

//     const pokeInfo = await apiUrl.map((p: SchemaPokemon) => {
//       const allPokeInfo = {
//         idPoke: p.id,
//         name: p.name,
//         life: p.stats[0].base_stat,
//         height: p.height,
//         weight: p.weight,
//         Attack: p.stats[1].base_stat,
//         Defense: p.stats[2].base_stat,
//         Speed: p.stats[5].base_stat,
//         typesApi: p.types.map((t) => t.type.name),
//         img: p.sprites.other.dream_world.front_default,
//         // img: p.sprites.versions["generation-v"]["black-white"].animated
//         //   .front_default,
//       };
//       return allPokeInfo;
//     });

//     // const infoDb = await getPokemonsDb();
//     // const allInfo = await pokeInfo.concat(infoDb);

//     while (num < 1) {
//       num++;
//       return Pokemon.bulkCreate(pokeInfo);
//     }

//     return Pokemon.findOrCreate({
//       where: { name: pokeInfo.map((p: SchemaPokemon) => p.name) },
//     });
//   } catch (error: any) {
//     console.error(error.message);
//     return error.message;
//   }
// }
