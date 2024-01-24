import { Router } from "express";
import { getProximasReservas, getReservas } from '../controllers/reserva.controller.js';
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/reservas', checkToken, getReservas);
router.get('/reservas/proximas', checkToken, getProximasReservas);

export default router;