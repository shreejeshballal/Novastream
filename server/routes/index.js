import { Router } from "express";
import UserRoutes from "./UserRoutes.js";

const router = Router();

router.use("/api/auth", UserRoutes);

export default router;
