import { Router } from "express";
import { createUser, deleteUser, getUsers, getUsersType, login, oneUser, editUser, editPassword } from "../controllers/usuarios.controller.js";
import { checkToken } from "../middleware/session.js";
import { checkPassword } from "../middleware/checkPassword.js";

const router = Router();

router.get('/usuarios', checkToken, getUsers);
router.get('/usuarios/one/:id', checkToken, oneUser)
router.get('/usuarios/tipo-usuario', checkToken, getUsersType)
router.post('/usuarios/create-user', checkToken, createUser);
router.post('/usuarios/login', login);
router.put('/usuarios/edit/:id', checkToken, editUser);
router.put('/usuarios/edit-password/:id', checkToken, checkPassword, editPassword);
router.delete('/usuarios/delete/:id', checkToken, deleteUser);

export default router;

