import { Router } from "express";
import { getProximasReservas, getReservas, addReserva } from '../controllers/reserva.controller.js';
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/reservas', checkToken, getReservas);
router.get('/reservas/proximas', checkToken, getProximasReservas);
router.post('/reservas/add', checkToken, addReserva);

export default router;