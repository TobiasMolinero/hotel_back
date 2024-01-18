import { Router } from "express";
import { getReservas } from '../controllers/reserva.controller.js';
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/reservas', checkToken, getReservas);

export default router;