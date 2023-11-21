import { Router, json } from "express";
import PingRoutes from "./PingRoutes.js";

const router = Router();

router.use("/ping", PingRoutes);

export default router;
