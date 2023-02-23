import { Router } from "express";
import pokemons from "./pokemons";
import poke_type from "./poke_type";
import pokemonId from "./pokemonId";
import createPokemon from "./createPokemon";
import deletePokemon from "./deletePokemon";

const router = Router();

router.use("/pokemons", pokemons);
router.use("/poketype", poke_type);
router.use("/pokemonId", pokemonId);
router.use("/create", createPokemon);
router.use("/delete", deletePokemon);

export default router;
