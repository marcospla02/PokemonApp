import { Router } from "express";
import { newPokemon } from "../controllers";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const created = await newPokemon(body);
    res.send(created);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
