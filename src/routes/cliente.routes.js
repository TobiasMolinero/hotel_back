import { Router } from "express";
import { addCliente, getClientes, getTiposDocumento, deleteCliente } from "../controllers/cliente.controller.js";
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/clientes', checkToken, getClientes);
router.get('/clientes/tiposDocumento', checkToken, getTiposDocumento);
router.post('/clientes/add', checkToken, addCliente);
router.put('/clientes/delete/:id', checkToken, deleteCliente);

export default router;