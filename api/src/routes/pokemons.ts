import { Router } from "express";
import getAllPokemons from "../controllers/getAllPokemons";
import getPokemonsIdOrName from "../controllers/getPokemonsIdOrName";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const info = await getAllPokemons();
    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const infoApi = await getPokemonsIdOrName(undefined, name);
    res.send(infoApi);
  } catch (error: any) {
    return res.send(error.message);
  }
});

export default router;
