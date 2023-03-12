import { Pokemon, User } from "../db";

export async function deletePokemon(id: string) {
  try {
    Pokemon.destroy({ where: { id: id } });
  } catch (error: any) {
    return error.message;
  }
}
export async function deleteUser(id: string) {
  try {
    User.destroy({ where: { id: id } });
  } catch (error: any) {
    return error.message;
  }
}
