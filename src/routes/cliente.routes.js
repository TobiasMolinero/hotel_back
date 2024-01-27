import { Router } from "express";
import { addCliente, getClientes, getTiposDocumento, deleteCliente, oneCliente, editCliente } from "../controllers/cliente.controller.js";
import { checkToken } from "../middleware/session.js";
import { validarCliente } from "../middleware/validarCliente.js";

const router = Router();

router.get('/clientes', checkToken, getClientes);
router.get('/clientes/one/:id', checkToken, oneCliente);
router.get('/clientes/tiposDocumento', checkToken, getTiposDocumento);
router.post('/clientes/add', checkToken, validarCliente,addCliente);
router.put('/clientes/delete/:id', checkToken, deleteCliente);
router.put('/clientes/edit/:id', checkToken, editCliente)

export default router;