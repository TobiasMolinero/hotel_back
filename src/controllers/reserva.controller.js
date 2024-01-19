import {pool} from '../db.js';

export const getReservas = (req, res) => {
    pool.query('SELECT * FROM reservas', 
    (error, results) => {
        if(error){
            res.status(500).json({
                message: 'Ocurrió un error en el servidor',
                error
            });
        } else if(results.length === 0){
            res.status(404).json({
                message: 'No se encontraron resultados'
            });
        } else {
            res.status(200).json({
                results
            })
        }
    })
}