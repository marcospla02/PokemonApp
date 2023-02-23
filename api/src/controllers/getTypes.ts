import axios from "axios";
import { Type } from "../db";

interface NameType {
  id: any;
  name: string;
}

export default async function getTypes() {
  try {
    const typesApi = await axios("https://pokeapi.co/api/v2/type");
    const typesApiToDb = await typesApi.data.results.map(
      (typeName: NameType) => typeName.name
    );
    typesApiToDb.forEach((type: string) => {
      Type.findOrCreate({ where: { name: type } });
    });

    return await Type.findAll();
  } catch (error: any) {
    console.error(error.message);
  }
}
getTypes();
