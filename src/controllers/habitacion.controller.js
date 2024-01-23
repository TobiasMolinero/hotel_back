import { pool } from "../db.js";

export const getRooms = (req, res) => {
    pool.query('SELECT * FROM habitaciones ORDER BY id_habitacion ASC',
    (error, results) => {
        if(error) throw error;
        if(results.length === 0){
            res.status(404).send('No hay habitaciones registradas.');
        } else {
            res.status(200).json(results);
        }
    });
};

export const getOne = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM habitaciones
                WHERE id_habitacion = ${id}`, 
        
        (error, results) => {
        if(error) throw error;
        if(results.length === 0){
            res.status(404).send('Registro no existente.');
        } else {
            res.status(200).json(results);
        }
    });
};

export const getTotalbyState = (req, res) => {
    pool.query('SELECT * FROM habitaciones_por_estado'
    ,(error, results) => { 
        if(error) throw error;
        if(results.length === 0){
            res.status(404).send('Registro no existente.');
        } else {
            res.status(200).json(results);
        }
    })
}