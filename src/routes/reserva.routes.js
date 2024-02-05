import { Router } from "express";
import { getProximasReservas, getReservas, addReserva, getReserva } from '../controllers/reserva.controller.js';
import { checkToken } from "../middleware/session.js";
import { validarReserva } from '../middleware/validarReserva.js';

const router = Router();

router.get('/reservas', checkToken, getReservas);
router.get('/reservas/one/:id', checkToken, getReserva);
router.get('/reservas/proximas', checkToken, getProximasReservas);
router.post('/reservas/add', checkToken, validarReserva, addReserva);

export default router;