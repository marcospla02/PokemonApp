import { Pokemon } from "../db";

export default async function deletePokemon(id: string) {
  try {
    Pokemon.destroy({ where: { id: id } });
  } catch (error: any) {
    return error.message;
  }
}
