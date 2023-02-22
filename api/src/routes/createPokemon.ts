import { Router } from "express";
import newPokemon from "../controllers/newPokemon";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const created = await newPokemon(body);
    console.log("soy created:", created);
    res.send(created);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
