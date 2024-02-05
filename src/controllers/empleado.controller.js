import {pool} from '../db.js';

export const getEmpleados = (req, res) => {
    pool.query('SELECT * FROM empleados', (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    })
}