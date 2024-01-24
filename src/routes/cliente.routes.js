import { Router } from "express";
import { getClientes } from "../controllers/cliente.controller.js";
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/clientes', checkToken, getClientes);

export default router;