import {pool} from '../db.js';

export const validarReserva = (req, res, next) => {
    let {habitacion, fecha_entrada, fecha_salida} = req.body;
    pool.query(`SELECT * FROM reserva WHERE id_habitacion = ${habitacion}
                AND ((fecha_entrada <= '${fecha_entrada}' AND fecha_salida >= '${fecha_salida}')
                OR fecha_entrada BETWEEN '${fecha_entrada}' AND '${fecha_salida}'
                OR fecha_salida BETWEEN '${fecha_entrada}' AND '${fecha_salida}')
    `, (error, results) => {
        if(error)throw error;
        if(results.length === 0){
            next();
            // res.json({
            //     message: 'No hay reservas de esta hab dentro de las fechas asignadas'
            // });
        } else {
            res.json({
                message: '¡Esta habitación ya está reservada entre las fechas asignadas!'
            });
        }
    })
}