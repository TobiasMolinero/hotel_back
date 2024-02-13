import { Router } from "express";
import { checkToken } from "../middleware/session.js";
import { addPiso, deletePiso, editPiso, getPisos, onePiso } from "../controllers/pisos.controller.js";

const router = Router();

router.get('/pisos', checkToken, getPisos);
router.get('/pisos/one/:id', checkToken, onePiso);
router.post('/pisos/add', checkToken, addPiso);
router.put('/pisos/edit/:id', checkToken, editPiso);
router.delete('/pisos/delete/:id', checkToken, deletePiso);

export default router;