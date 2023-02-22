import axios from "axios";
import Type from "../db";

interface NameType {
  id: any;
  name: string;
}

export default async function getTypes() {
  try {
    const typesApi = await axios("https://pokeapi.co/api/v2/type?limit=100");
    const typesApiToDb = await typesApi.data.results.map(
      (typeName: NameType) => typeName.name
    );
    typesApiToDb.forEach((type: string) => {
      Type.poke_type.findOrCreate({ where: { name: type } });
    });

    return await Type.poke_type.findAll();
  } catch (error: any) {
    console.error(error.message);
  }
}
getTypes();
