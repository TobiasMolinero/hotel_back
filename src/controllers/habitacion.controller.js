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
    const idEstado = req.params.id;
    pool.query(`SELECT * FROM cantidad_por_estado WHERE id_estado_habitacion = ${idEstado}`
    ,(error, results) => { 
        if(error) throw error;
        if(results.length === 0){
            res.json({
                cant: 0
            });
        } else {
            res.json({
                cant: results[0].cant
            });
        }
    })
}

