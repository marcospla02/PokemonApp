import { Router } from "express";
import pokemons from "./pokemons";
import poke_type from "./poke_type";
import pokemonId from "./pokemonId";
import createPokemon from "./createPokemon";

const router = Router();

router.use("/pokemons", pokemons);
router.use("/poketype", poke_type);
router.use("/pokemonId", pokemonId);
router.use("/create", createPokemon);

export default router;
