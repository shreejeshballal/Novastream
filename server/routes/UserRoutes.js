

import { Router } from "express";
import { createUser } from "../controllers/UserController.js"
const router = Router();

router.post("/", createUser);

// router.get("/:id", showUser);
// router.post("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.post("/:id/changepassword", changePassword);




export default router;