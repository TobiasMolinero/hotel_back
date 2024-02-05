import { Router } from "express";
import { checkToken } from "../middleware/session.js";
import { getEmpleados } from "../controllers/empleado.controller.js";

const router = Router();

router.get('/empleados', checkToken, getEmpleados);

export default router;