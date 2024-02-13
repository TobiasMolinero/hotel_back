import {pool} from '../db.js';

export const getCategorias = (req, res) => {
    pool.query('SELECT * FROM categoria_habitacion', (error, results) => {
        if(error)throw error;
        res.json(results)
    })
}

export const oneCategoria = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM categoria_habitacion WHERE id_categoria = ${id}
    `, (error, results) => {
        if(error) throw error;
        res.json(results);
    })
} 

export const addCategoria = (req, res) => {
    const {descripcion, detalle, precio} = req.body;
    pool.query(`INSERT INTO categoria_habitacion(descripcion, detalle, precio)
                VALUES('${descripcion}', '${detalle}', ${precio})
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'La categoría se creo con exito.'
        })
    })
}

export const editCategoria = (req, res) => {
    const id = req.params.id;
    const {descripcion, detalle, precio} = req.body;
    pool.query(`UPDATE categoria_habitacion SET 
                descripcion = '${descripcion}',
                detalle = '${detalle}',
                precio = ${precio}
                WHERE id_categoria = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'La categoría se modificó con exito.'
        })
    })
}

export const deleteCategoria = (req, res) => {
    const id = req.params.id;
    pool.query(`UPDATE categoria_habitacion SET estado = 0
                WHERE id_categoria = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'La categoría se eliminó con exito.'
        });
    })
}