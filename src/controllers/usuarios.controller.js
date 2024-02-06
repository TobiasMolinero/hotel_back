import { pool } from '../db.js';
import { encrypt, verified } from '../utils/encrypt.js';
import { generateToken } from '../utils/jwt.js';

export const createUser = async(req, res) => {
    const {usuario, clave, cod_empleado, id_tipo_usuario} = req.body;

    const passHash = await encrypt(clave);

    pool.query(`INSERT INTO usuario(cod_empleado, usuario, clave, id_tipo_usuario)
                VALUES(${cod_empleado}, '${usuario}', '${passHash}', ${id_tipo_usuario});
    `, (error, results) => {
        if(error){
            res.status(400).json({
                message: 'No se pudo registrar al usuario.'
            });
        } else {
            res.status(201).json({
                message: 'Usuario registrado con exito.'
            });
        }
    });
};

export const login = (req, res) => {
    const {usuario, clave} = req.body;
    pool.query(
        `SELECT * FROM validarUsuario WHERE usuario = '${usuario}'`
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
                var userData = results[0];
                delete userData.clave;
                res.json({
                    auth: true,
                    message: 'Iniciaste sesión con exito',
                    userData,
                    token
                });
            } else {
                res.status(401).json({
                    auth: false,
                    message: 'Contraseña incorrecta.'
                });
            }
        } else{
            res.status(404).json({
                auth: false,
                message: 'El usuario ingresado no existe.'
            });
        }
    });
};

export const getUsers = (req, res) => {
    pool.query('SELECT id_usuario, usuario, nombre, apellido, descripcion FROM validarUsuario ORDER BY id_usuario ASC'
    , (error, results) => {
        if (error) throw error;
        res.status(200).json(results);
    })
}

export const getUsersType = (req, res) => {
    pool.query('SELECT * FROM tipo_usuario', (error, results) => {
        if(error)throw error;
        res.json(results);
    })
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    pool.query(`DELETE FROM usuario WHERE id_usuario = ${id}
    `, (error, results) => {
        if(error) throw error;
        res.json({
            message: 'El usuario fue dado de baja con exito.'
        });
    })
}