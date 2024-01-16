import { Router } from "express";
import { getRooms, getOne, getTotalbyState } from "../controllers/habitacion.controller.js";

const router = Router();

router.get('/habitaciones', getRooms);
router.get('/habitaciones/one/:id', getOne);
router.get('/habitaciones/totales', getTotalbyState);

export default router;