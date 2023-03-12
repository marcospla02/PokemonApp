import { Router } from "express";
import { deletePokemon, deleteUser } from "../controllers";

const router = Router();

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("id is required");

    await deletePokemon(id);

    res.send({ msg: "Pokemon deleted successfully" });
  } catch (error: any) {
    res.send(error.message);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("id is required");

    await deleteUser(id);

    res.send({ msg: "User delete successfully" });
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
