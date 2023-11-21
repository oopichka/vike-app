import { Router } from "express";
import { PingController } from "../controllers/PingController.js";

const router = Router();

router.get("/", PingController.ping);

export default router;
