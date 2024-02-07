import { pool } from "../db.js";


export const changeStateToReserved = (req, res, next) => {
    const {habitacion} = req.body;
    pool.query(`UPDATE habitacion SET id_estado = 4 
                WHERE id_estado_habitacion = ${habitacion}
    `, (error, results) => {
        if(error) throw error;
        next();
    });
}