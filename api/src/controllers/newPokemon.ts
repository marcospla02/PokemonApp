import { Pokemon, Type } from "../db";
import { Body } from "../assets/interfaces";

export default async function newPokemon(body: Body) {
  try {
    if (!body.name) throw new Error("the name is required");

    let newPokemon = await Pokemon.create({
      name: body.name,
      life: body.life,
      height: body.height,
      weight: body.weight,
      Attack: body.Attack,
      Defense: body.Defense,
      Speed: body.Speed,
      img: body.img,
    });

    const findType = await Type.findAll({
      where: { name: body.types },
    });

    // console.log("soy find type:", findType);
    // newPokemon.setDataValue("types", findType);
    await (newPokemon as any).addType(findType);

    return newPokemon;
  } catch (error: any) {
    return error.message;
  }
}
