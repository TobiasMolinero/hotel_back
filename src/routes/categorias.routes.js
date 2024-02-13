import { Router } from "express";
import { checkToken } from "../middleware/session.js";
import { addCategoria, editCategoria, getCategorias, oneCategoria, deleteCategoria } from "../controllers/categorias.controller.js";

const router = Router();

router.get('/categorias', checkToken, getCategorias);
router.get('/categorias/one/:id', checkToken, oneCategoria);
router.post('/categorias/add', checkToken, addCategoria);
router.put('/categorias/edit/:id', checkToken, editCategoria);
router.delete('/categorias/delete/:id', checkToken, deleteCategoria);

export default router;