import { Router } from "express";
import { getTypes } from "../controllers";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const data = await getTypes();
    res.send(data);
  } catch (error: any) {
    res.send(error.message);
  }
});

export default router;
