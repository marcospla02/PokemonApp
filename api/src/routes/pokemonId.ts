import { Router } from "express";
import getPokemonsIdOrName from "../controllers/getPokemonsIdOrName";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id as number | string;
    const pokemonApi = await getPokemonsIdOrName(id, null);
    res.send(pokemonApi);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
