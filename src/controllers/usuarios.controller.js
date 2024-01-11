import { pool } from '../db.js';
import { encrypt, verified } from '../utils/encrypt.js';
import { generateToken } from '../utils/jwt.js';

export const createUser = async(req, res) => {
    const {usuario, clave} = req.body;

    const passHash = await encrypt(clave);

    pool.query(`INSERT INTO usuarios(usuario, clave)
                VALUES('${usuario}', '${passHash}');
    `, (error, results) => {
        if(error){
            res.status(400).json(
                {
                    message: 'No fue posible registrar el usuario, por favor intente nuevamente o comuniquese con soporte tecnico.',
                }
            );
        } else {
            res.status(201).json({
                mesagge: 'Usuario registrado con exito'
            });
        }
    });
};

export const login = (req, res) => {
    const {usuario, clave} = req.body;

    pool.query(
        `SELECT * FROM usuarios WHERE usuario = '${usuario}'`
    ,async (error, results) => {
        if(error){
            res.status(500).json({
                message: 'Error en el servidor.'
            });
        } else if(results.length > 0){
            const user = results;
            const match = await verified(clave, user[0].clave);
            const token = generateToken(user[0].usuario);

            if(match){
                res.status(200).json({
                    message: 'Inicio de sesión exitoso.',
                    token
                });
            } else {
                res.status(401).json({
                    message: 'Contraseña incorrecta.'
                });
            }
        } else{
            res.status(404).json({
                message: 'El usuario ingresado no existe.'
            });
        }
    });
};