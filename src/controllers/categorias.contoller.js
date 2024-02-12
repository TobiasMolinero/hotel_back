import {pool} from '../db.js';

export const getCategorias = (req, res) => {
    pool.query('SELECT * FROM categoria_habitacion', (error, results) => {
        if(error)throw error;
        res.json(results)
    })
}