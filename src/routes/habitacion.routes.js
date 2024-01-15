import { Router } from "express";
import { getRooms, getOne } from "../controllers/habitacion.controller.js";

const router = Router();

router.get('/habitaciones', getRooms);
router.get('/habitaciones/:id', getOne);

export default router;