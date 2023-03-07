import { Router } from "express";
import { getUserById, getUsers } from "../controllers/getUsers";
import { updateUser } from "../controllers/User";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const resultUser = await getUsers();

    if (!resultUser) return res.status(404).send("Not users yet");

    res.send(resultUser);
  } catch (error: any) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const resultUser = await getUserById(id);

    if (!resultUser) return res.status(404).send("The user does not exist");

    res.send(resultUser);
  } catch (error: any) {
    res.send(error.message);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const { favorites } = req.body;
    const id = req.params.id;

    const resultUpdate = await updateUser(favorites, id);

    res.send(resultUpdate);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
