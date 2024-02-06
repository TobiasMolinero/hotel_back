import { Router } from "express";
import { createUser, deleteUser, getUsers, getUsersType, login } from "../controllers/usuarios.controller.js";
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/usuarios', checkToken, getUsers);
router.get('/usuarios/tipo-usuario', checkToken, getUsersType)
router.post('/usuarios/create-user', checkToken, createUser);
router.post('/usuarios/login', login);
router.delete('/usuarios/delete/:id', checkToken, deleteUser);

export default router;

