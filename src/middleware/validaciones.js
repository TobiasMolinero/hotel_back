import e from 'express';
import {pool} from '../db.js';

export const validarCliente = (req, res, next) => {
    const {nroDocumento}  = req.body;
    pool.query(`SELECT * FROM clientes WHERE nro_documento = '${nroDocumento}'
        `, (error, results) => {
        if(error) throw error;
        if(results.length === 0){
            next();
        } else {
            res.json({
                message: 'Ya existe un cliente registrado con ese número de documento.'
            })
        }
    });
}

export const validarReserva = (req, res, next) => {
    const {habitacion, fecha_entrada, fecha_salida} = req.body;
    const hoy = new Date();
    const fechaEntrada = new Date(fecha_entrada);
    if(fechaEntrada < hoy){
        res.json({
            message: 'La fecha de entrada tiene que ser mayor o igual a la fecha actual.'
        })
    }
    pool.query(`SELECT * FROM reserva WHERE id_habitacion = ${habitacion}
                AND ((fecha_entrada <= '${fecha_entrada}' AND fecha_salida >= '${fecha_salida}')
                OR fecha_entrada BETWEEN '${fecha_entrada}' AND '${fecha_salida}'
                OR fecha_salida BETWEEN '${fecha_entrada}' AND '${fecha_salida}')
    `, (error, results) => {
        if(error)throw error;
        if(results.length === 0){
            next();
        } else {
            res.json({
                message: '¡Esta habitación ya está reservada entre las fechas asignadas!'
            });
        }
    })
}

export const validarHabitacion = (req, res, next) => {
    
}

export const validarCategoria = (req, res, next) => {

}

export const validarEmpleado = (req, res, next) => {

}

export const validarNivel = (req, res, next) => {

}