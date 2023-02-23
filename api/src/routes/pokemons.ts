import { Router } from "express";
import findNameInDb from "../controllers/findNameInDb";
import getPokemonsDb from "../controllers/getPokemonsDb";
import getAllPokemons from "../controllers/getAllPokemons";
// import getPokemonsIdOrName from "../controllers/controllersApi/getPokemonsIdOrName";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const info = await getAllPokemons();
    // const info = await getPokemonsDb();
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const infoDb = await findNameInDb(name);
    // const infoApi = await getPokemonsIdOrName(null, name);
    res.send(infoDb);
  } catch (error: any) {
    return res.send(error.message);
  }
});

export default router;
