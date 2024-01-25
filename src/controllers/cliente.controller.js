import {pool} from '../db.js';

export const getClientes = (req, res) => {
    pool.query('SELECT * FROM clientes'
    , (error ,results) => {
        if(error) throw error;
        res.json(results);
    })
}

export const addCliente = (req, res) => {
    const {nombre, apellido, tipoDocumento, nroDocumento, telefono, mail} = req.body;
    pool.query(`INSERT INTO cliente(id_tipo_documento, nro_documento, nombre, apellido, nro_telefono, correo_electronico)
                VALUES(${tipoDocumento}, '${nroDocumento}', '${nombre}', '${apellido}', '${telefono}', '${mail}')
    `, (error, results) => {
        if(error) throw error;
        res.json({
            message: 'El registro se creo con exito.'
        });
    })
} 

export const deleteCliente = (req, res) => {
    const id = req.params.id;
    pool.query(`UPDATE cliente SET estado = 0 WHERE id_cliente = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'El cliente se dio de baja con exito.'
        });
    })
}


export const getTiposDocumento = (req, res) => {
    pool.query('SELECT * FROM tipo_documento'
    , (error, results) => {
        if(error)throw error;
        res.json(results);
    })
}
