import { Router } from "express";
import { getRooms, getOne, getTotalbyState, addRoom, selectOne, editRoom, deleteRoom } from "../controllers/habitacion.controller.js";
import { checkToken } from "../middleware/session.js";

const router = Router();

router.get('/habitaciones', checkToken, getRooms);
router.get('/habitaciones/one/:id', checkToken, getOne);
router.get('/habitaciones/select-one/:id', checkToken, selectOne);
router.get('/habitaciones/total/:id', checkToken, getTotalbyState);
router.post('/habitaciones/add', checkToken, addRoom);
router.put('/habitaciones/edit/:id', checkToken, editRoom);
router.delete('/habitaciones/delete/:id', checkToken, deleteRoom);

export default router;