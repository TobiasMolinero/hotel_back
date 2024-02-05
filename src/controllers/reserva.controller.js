import {pool} from '../db.js';

export const getReservas = (req, res) => {
    pool.query('SELECT * FROM reservas', 
    (error, results) => {
        if(error){
            res.status(500).json({
                error
            });
        } else if(results.length === 0){
            res.status(404);
        } else {
            res.status(200).json({
                results
            })
        }
    })
}

export const getReserva = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM reservas WHERE nro_reserva = ${id}`
    , (error, results) => {
        if(error) throw error;
        res.json(results);
    });
}

export const getProximasReservas = (req, res) => {
    pool.query('SELECT * FROM reservas_proximas'
    , (error ,results) => {
        if(error){
            res.json({
                error
            })
        } else if(results.length === 0){
            res.json(results);
        } else {
            res.json({
                results
            })
        }
    })
}

export const addReserva = (req, res) => {
    let {cliente, habitacion, fecha_entrada, fecha_salida, observaciones} = req.body;
    const hoy = new Date();
    const fechaEntrada = new Date(fecha_entrada);


    if(observaciones === undefined){
        observaciones = ' - ';
    }
    if(fechaEntrada < hoy){
        res.json({
            message: 'La fecha de entrada tiene que ser mayor o igual a la fecha actual.'
        })
    } else {
        pool.query(`INSERT INTO reserva(id_cliente, id_habitacion, fecha_entrada, fecha_salida, observacion)
                    VALUES(${cliente}, ${habitacion}, '${fecha_entrada}', '${fecha_salida} 00:01', '${observaciones}')
        `, (error, results) => {
            if(error) throw error;
            res.json({
                message: 'Nueva reserva registrada.'
            });
        })
    }
}