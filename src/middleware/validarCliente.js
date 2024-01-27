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