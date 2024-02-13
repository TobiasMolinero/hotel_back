import { pool } from "../db.js";

export const getRooms = (req, res) => {
    pool.query('SELECT * FROM habitaciones ORDER BY nro_habitacion ASC',
    (error, results) => {
        if(error) throw error;
        if(results.length === 0){
            res.status(404).send('No hay habitaciones registradas.');
        } else {
            res.status(200).json(results);
        }
    });
};

export const getOne = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM habitaciones
                WHERE id_habitacion = ${id}`, 
        
        (error, results) => {
        if(error) throw error;
        if(results.length === 0){
            res.status(404).send('Registro no existente.');
        } else {
            res.status(200).json(results);
        }
    });
};

export const selectOne = (req, res) => {
    const id = req.params.id;
    pool.query(`SELECT * FROM habitacion WHERE id_habitacion = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json(results);
    }) 
}

export const getTotalbyState = (req, res) => {
    const idEstado = req.params.id;
    pool.query(`SELECT * FROM cantidad_por_estado WHERE id_estado_habitacion = ${idEstado}`
    ,(error, results) => { 
        if(error) throw error;
        if(results.length === 0){
            res.json({
                cant: 0
            });
        } else {
            res.json({
                cant: results[0].cant
            });
        }
    })
}


export const addRoom = (req, res) => {
    const {nro_habitacion, categoria, piso} = req.body;
    const estado_habitacion = 1; 
    pool.query(`INSERT INTO habitacion(nro_habitacion, id_estado_habitacion, id_piso, id_categoria)
                VALUES('${nro_habitacion}', ${estado_habitacion}, ${piso}, ${categoria})
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'La habitación fue creada con exito.'
        })
    }); 
}

export const editRoom = (req, res) => {
    const id = req.params.id;
    const {nro_habitacion, categoria, piso} = req.body;
    pool.query(`UPDATE habitacion SET 
                nro_habitacion = '${nro_habitacion}',
                id_categoria = ${categoria},
                id_piso = ${piso}
                WHERE id_habitacion = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'Los datos de la habitación se modificaron con exito.'
        })
    })
}

export const deleteRoom = (req, res) => {
    const id = req.params.id;
    pool.query(`UPDATE habitacion SET estado = 0 
                WHERE id_habitacion = ${id}
    `, (error, results) => {
        if(error)throw error;
        res.json({
            message: 'El registro se eliminó con exito.'
        })
    })
}
