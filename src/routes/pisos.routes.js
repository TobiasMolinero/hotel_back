import { Router } from "express";
import { checkToken } from "../middleware/session.js";
import { getPisos } from "../controllers/pisos.controller.js";

const router = Router();

router.get('/pisos', checkToken, getPisos);

export default router;