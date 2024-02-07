INSERT INTO estado_habitacion(descripcion) 
VALUES('Disponible'),('Ocupado'),('Limpieza'),('Reservado');
SELECT * FROM estado_habitacion;

INSERT INTO categoria_habitacion(descripcion, detalle, precio)
VALUES('Twin', 'Dos camas individuales', 20000),
('Suite Junior', '1 cama matrimonial + living', 30000),
('Suite Apart', '1 cama matrimonial + 1 sofá cama + living, cocina y terraza', 45000);
SELECT * FROM categoria_habitacion;


INSERT INTO piso(descripcion) 
VALUES('Nivel 1'),('Nivel 2'),('Nivel 3');
SELECT * FROM piso;

INSERT INTO habitacion(nro_habitacion, id_estado_habitacion, id_piso, id_categoria)
VALUES(101, 1, 1, 1),(102, 1, 1, 1),(103, 1, 1, 1),(104, 1, 1, 2),(105, 1, 1, 2),(106, 1, 1, 2),
(207, 1, 2, 1),(208, 1, 2, 1),(209, 1, 2, 1),(210, 1, 2, 2),(211, 1, 2, 2),(212, 1, 2, 2),
(313, 1, 3, 3),(314, 1, 3, 3),(315, 1, 3, 3),(316, 1, 3, 3);

UPDATE habitacion SET id_estado_habitacion = 4 WHERE id_habitacion = 12;
SELECT * FROM habitaciones
ORDER BY id_habitacion ASC;


INSERT INTO tipo_empleado(descripcion)
VALUES('Recepcion'),('Limpieza'),('Cocina'),('Seguridad');
SELECT * FROM tipo_empleado;

INSERT INTO tipo_usuario(descripcion)
VALUES('admin'),('empleado');
SELECT * FROM tipo_usuario;

INSERT INTO estado_venta(descripcion)
VALUES('Pendiente de pago'),('pago completo');
SELECT * FROM estado_venta;

INSERT INTO empleado(id_tipo_empleado, dni, nombre, apellido, nro_telefono, correo_electronico)
VALUES(1, '41030493', 'Pedro', 'Gonzales', '3815434123', 'pedrogonzales@gmail.com'),
(1, '41059937', 'Tobias', 'Molinero', '3815673581', 'tobiasmolinero98@gmail.com');
SELECT * FROM empleado;

INSERT INTO tipo_documento(descripcion)
VALUES('DNI'),('Pasaporte');
SELECT * FROM tipo_documento;

INSERT INTO cliente(id_tipo_documento, nro_documento, nombre, apellido, nro_telefono, correo_electronico)
VALUES(1, '38923043', 'Pablo', 'Campero', '3814738932', 'pablocampero@mail.com');
SELECT * FROM cliente;

INSERT INTO reserva(id_cliente, id_habitacion, fecha_entrada, fecha_salida, observacion)
VALUES(2, 2, '2024-01-17', '2024-01-24', '');
SELECT * FROM reserva;

UPDATE habitacion SET id_estado_habitacion = 1 WHERE id_habitacion = 2;
SELECT * FROM habitaciones;

SELECT * FROM usuario;