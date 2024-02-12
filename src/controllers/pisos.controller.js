import {pool} from '../db.js';

export const getPisos = (req, res) => {
    pool.query('SELECT * FROM piso', (error, results) => {
        if(error)throw error;
        res.json(results)
    })
}