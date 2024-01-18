import { Router } from "express";
import { createUser, login } from "../controllers/usuarios.controller.js";

const router = Router();

router.post('/usuarios/create-user', createUser);
router.post('/usuarios/login', login);

export default router;

