import { Router } from "express";
import { createUser } from "../controllers/User";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const resultUser = await createUser(body);
    if (!resultUser)
      return res.status(404).send(`couldn't create the user "${body.name}"`);
    res.send(resultUser);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
