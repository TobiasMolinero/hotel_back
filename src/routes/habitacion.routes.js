import { Router } from "express";
import { getRooms, getOne, getTotalbyState } from "../controllers/habitacion.controller.js";
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/habitaciones', getRooms);
router.get('/habitaciones/one/:id', getOne);
router.get('/habitaciones/totales', checkToken, getTotalbyState);

export default router;