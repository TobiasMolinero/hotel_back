/* HABITACIONES */
DROP VIEW habitaciones;
CREATE VIEW habitaciones AS
SELECT h.id_habitacion,
	   h.nro_habitacion,
       es.descripcion 'estado_habitacion',
       p.descripcion 'piso',
       c.descripcion 'categoria',
       c.precio
FROM habitacion h
JOIN estado_habitacion es
ON h.id_estado_habitacion = es.id_estado_habitacion
JOIN piso p
ON h.id_piso = p.id_piso
JOIN categoria_habitacion c
ON h.id_categoria = c.id_categoria
WHERE h.estado = 1;

SELECT * FROM habitaciones;

/* TOTAL HABITACIONES POR ESTADO */
DROP VIEW cantidad_por_estado;
CREATE VIEW cantidad_por_estado AS
SELECT h.id_estado_habitacion, count(h.id_estado_habitacion) as 'cant' FROM habitacion h
JOIN estado_habitacion eh
ON h.id_estado_habitacion = eh.id_estado_habitacion
WHERE h.estado = 1
GROUP BY eh.id_estado_habitacion;


SELECT * FROM cantidad_por_estado WHERE id_estado_habitacion = 4;

/* USUARIOS */
CREATE VIEW validarUsuario AS 
SELECT u.id_usuario, u.usuario, u.clave, e.nombre, e.apellido, tu.descripcion FROM usuario u
JOIN empleado e
ON u.cod_empleado = e.cod_empleado
JOIN tipo_usuario tu
ON u.id_tipo_usuario = tu.id_tipo_usuario
WHERE u.estado = 1;

SELECT id_usuario, usuario, nombre, apellido, descripcion FROM validarUsuario;

/* RESERVAS */
DROP VIEW reservas;
CREATE VIEW reservas AS
SELECT r.nro_reserva, 
c.nro_documento,
c.nombre, 
c.apellido,
c.nro_telefono,
c.correo_electronico,
h.nro_habitacion,
ch.descripcion as 'categoria',
ch.precio,
p.descripcion as 'piso',
r.fecha_entrada, 
r.fecha_salida,
r.observacion FROM reserva r
JOIN cliente c
ON r.id_cliente = c.id_cliente
JOIN habitacion h
ON r.id_habitacion = h.id_habitacion
JOIN categoria_habitacion ch
ON h.id_categoria = ch.id_categoria
JOIN piso p
ON h.id_piso = p.id_piso
WHERE r.estado = 1;

SELECT * FROM reservas;


SELECT * FROM reserva WHERE id_habitacion = 12 
AND ((fecha_entrada <= '2024-02-06' AND fecha_salida >= '2024-02-10')
OR fecha_salida BETWEEN '2024-02-06' AND '2024-02-10' 
OR fecha_entrada BETWEEN '2024-02-06' AND '2024-02-10');


UPDATE reserva SET fecha_salida = '2024-02-08 00:01' WHERE nro_reserva = 9;

DELETE FROM reserva WHERE nro_reserva = 16;

/* PROXIMAS RESERVAS */
CREATE VIEW reservas_proximas AS
SELECT r.nro_reserva, 
c.nro_documento,
c.nombre, 
c.apellido,
h.nro_habitacion,
ch.descripcion as 'categoria',
p.descripcion as 'piso',
r.fecha_entrada, 
r.fecha_salida,
r.observacion FROM reserva r
JOIN cliente c
ON r.id_cliente = c.id_cliente
JOIN habitacion h
ON r.id_habitacion = h.id_habitacion
JOIN categoria_habitacion ch
ON h.id_categoria = ch.id_categoria
JOIN piso p
ON h.id_piso = p.id_piso
WHERE r.estado = 1 AND r.fecha_entrada >= now(); 

SELECT * FROM reservas_proximas;


/* CLIENTES */
DROP VIEW clientes;
CREATE VIEW clientes AS
SELECT c.id_cliente, 
td.descripcion as 'tipo_documento', 
c.nro_documento, 
c.nombre, 
c.apellido, 
c.nro_telefono, 
c.correo_electronico FROM cliente c
JOIN tipo_documento td
ON c.id_tipo_documento = td.id_tipo_documento
WHERE c.estado = 1;

SELECT * FROM clientes;


/* EMPLEADOS */

CREATE VIEW empleados AS
SELECT e.cod_empleado, te.descripcion, e.dni, e.nombre, e.apellido,
	   e.nro_telefono, e.correo_electronico FROM empleado e
JOIN tipo_empleado te
ON e.id_tipo_empleado = te.id_tipo_empleado
WHERE e.estado = 1;
