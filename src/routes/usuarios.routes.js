import { Router } from "express";
import { createUser, login } from "../controllers/usuarios.controller.js";

const router = Router();

router.post('/create-user', createUser);
router.post('/login', login);

export default router;

