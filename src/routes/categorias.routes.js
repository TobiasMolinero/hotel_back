import { Router } from "express";
import { checkToken } from "../middleware/session.js";
import { getCategorias } from "../controllers/categorias.contoller.js";

const router = Router();

router.get('/categorias', checkToken, getCategorias);

export default router;