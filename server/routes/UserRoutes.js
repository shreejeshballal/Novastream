

import { Router } from "express";
import { createUser, removeUser, loginUser, googleLogin } from "../controllers/UserController.js"
import { authMiddleware } from "../middleware/AuthMiddleware.js";
const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/google", googleLogin);
router.get("/remove/:id", authMiddleware, removeUser);




// router.get("/:id", showUser);
// router.post("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.post("/:id/changepassword", changePassword);




export default router;