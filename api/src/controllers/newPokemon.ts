import Pokemon from "../db";
import Type from "../db";

interface Body {
  name: string;
  life: number;
  height: number;
  weight: number;
  Attack: number;
  Defense: number;
  Speed: number;
  img: string;
  type: string[];
}

export default async function newPokemon(body: Body) {
  try {
    if (!body.name) throw new Error("the name is required");

    let newPokemon = await Pokemon.pokemon.create({
      name: body.name,
      life: body.life,
      height: body.height,
      weight: body.weight,
      Attack: body.Attack,
      Defense: body.Defense,
      Speed: body.Speed,
      img: body.img,
    });

    const findType = await Type.poke_type.findAll({
      where: { name: body.type },
    });

    newPokemon.setAttributes(findType);

    console.log("newPokemon", newPokemon);
    return newPokemon;
  } catch (error: any) {
    return error.message;
  }
}
