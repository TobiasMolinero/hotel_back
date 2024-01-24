import {pool} from '../db.js';

export const getClientes = (req, res) => {
    pool.query('SELECT * FROM cliente'
    , (error ,results) => {
        if(error) throw error;
        res.json(results);
    })
}