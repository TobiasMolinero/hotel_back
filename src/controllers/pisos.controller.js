import {pool} from '../db.js';

export const getPisos = (req, res) => {
    pool.query('SELECT * FROM piso WHERE estado = 1', (error, results) => {
        if(error)throw error;
        res.json(results)
    })
}

export const onePiso = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM piso WHERE id_piso = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json(results);
    })
}

export const addPiso = (req, res) => {
    const {descripcion} = req.body;
    pool.query(`INSERT INTO piso(descripcion)
                VALUES('${descripcion}')
    `, (error, results) => {
        if(error) throw error;
        res.json({
            message: 'El registro se creó con exito.'
        })
    })
}

export const editPiso = (req, res) => {
    const id = req.params.id;
    const {descripcion} = req.body;
    pool.query(`UPDATE piso SET descripcion = '${descripcion}'
                WHERE id_piso = ${id}
    `, (error, results) => {
        if(error) throw error;
        res.json({
            message: 'El registro se modificó con exito.'
        })
    })
}

export const deletePiso = (req, res) => {
    const id = req.params.id;
    pool.query(`UPDATE piso SET estado = 0
                WHERE id_piso = ${id}
    `, (error, results) => {
        if(error) throw error;
        res.json({
            message: 'El registro se modificó con exito.'
        })
    })
}