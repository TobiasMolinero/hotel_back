import express from "express";
import morgan from "morgan";
import compression from "compression";
import bodyParser from "body-parser";
import cors from "cors";

//IMPORTAMOS RUTAS
import indexRouter from './routes/index.routes.js';
import usuarios from './routes/usuarios.routes.js';
import habitaciones from './routes/habitacion.routes.js';
import reservas from './routes/reserva.routes.js';

// MIDDLEWARES
const app = express();
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('dev'));
app.use(cors());

// USAMOS LAS RUTAS
app.use('/', indexRouter);
app.use('/', usuarios);
app.use('/', habitaciones);
app.use('/', reservas);

export default app;