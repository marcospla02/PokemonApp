import { Router } from "express";
import getPokemonsIdInDb from "../controllers/getPokemonIdInDb";
// import getPokemonsIdOrName from "../controllers/getPokemonsIdOrName";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("the id are required");
    const pokemonDb = await getPokemonsIdInDb(id);
    // const pokemonApi = await getPokemonsIdOrName(id, null);
    res.send(pokemonDb);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
