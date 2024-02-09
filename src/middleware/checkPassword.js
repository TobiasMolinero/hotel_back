import { compare } from 'bcrypt';
import {pool} from '../db.js';
import { verified } from '../utils/encrypt.js';

export const checkPassword = (req, res, next) => {
    const id = req.params.id;
    const {clave} = req.body;
    pool.query(`SELECT clave FROM validarUsuario
                WHERE id_usuario = ${id}
    `, async(error, results) => {
        if(error) throw error;
        if(results.length > 0){
            const user = results;
            const match = await verified(clave, user[0].clave);
            if(match){
                next();
            } else {
                res.json({
                    error: 'La clave actual ingresada no es correcta'
                });
            }
        } 
    })
}