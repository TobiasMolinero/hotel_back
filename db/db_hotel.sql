DROP DATABASE db_hotel;

CREATE DATABASE db_hotel;
USE db_hotel;

/* TABLAS */
CREATE TABLE habitacion(
	id_habitacion INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nro_habitacion INT NOT NULL,
    id_estado_habitacion INT NOT NULL,
    id_piso INT NOT NULL,
    id_categoria INT NOT NULL,
    estado BIT DEFAULT 1
);
/* DATOS CARGADOS */

CREATE TABLE categoria_habitacion(
	id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
	detalle VARCHAR(200) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    estado BIT DEFAULT 1
);
/* DATOS CARGADOS */

CREATE TABLE piso(
	id_piso INT PRIMARY KEY AUTO_INCREMENT,
	descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT 1
);
/* DATOS CARGADOS */

CREATE TABLE estado_habitacion(
	id_estado_habitacion INT PRIMARY KEY AUTO_INCREMENT,
	descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT 1
);
/* DATOS CARGADOS */

CREATE TABLE cliente(
	id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo_documento INT NOT NULL,
	nro_documento VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    nro_telefono VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(150) NOT NULL,
	estado BIT DEFAULT 1
);

CREATE TABLE tipo_documento(
	id_tipo_documento INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT(1)
);

CREATE TABLE empleado(
	cod_empleado INT PRIMARY KEY AUTO_INCREMENT,
    id_tipo_empleado INT NOT NULL,
    dni VARCHAR(50) NOT NULL,
	nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    nro_telefono VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(150) NOT NULL,
	estado BIT DEFAULT 1
);

CREATE TABLE tipo_empleado(
	id_tipo_empleado INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT 1
);
/* DATOS CARGADOS */

CREATE TABLE reserva(
	nro_reserva INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT NOT NULL,
    id_habitacion INT NOT NULL,
    fecha_entrada DATETIME NOT NULL,
    fecha_salida DATETIME NOT NULL,
    observacion VARCHAR(500),
    estado BIT DEFAULT 1
);


CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    cod_empleado INT NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    clave VARCHAR(100) NOT NULL,
    id_tipo_usuario INT NOT NULL,
    estado BIT DEFAULT 1
);

/* DATOS CARGADOS */

CREATE TABLE tipo_usuario(
	id_tipo_usuario INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT 1 NOT NULL
);
/* DATOS CARGADOS */

CREATE TABLE factura(
	nro_factura INT PRIMARY KEY AUTO_INCREMENT,
    nro_reserva INT NOT NULL,
    id_cliente INT NOT NULL,
    fecha DATETIME NOT NULL,
    sub_total DECIMAL(10, 2) NOT NULL,
    impuestos DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
	estado BIT DEFAULT 1
);


CREATE TABLE venta(
	nro_venta INT PRIMARY KEY AUTO_INCREMENT,
    nro_reserva INT NOT NULL,
    id_estado_venta INT NOT NULL,
    estado BIT DEFAULT 1
);

CREATE TABLE estado_venta(
	id_estado_venta INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL,
    estado BIT DEFAULT 1 NOT NULL
);
/* DATOS CARGADOS */

CREATE TABLE detalle_venta(
	nro_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL
);


CREATE TABLE detalle_venta_temporal(
	nro_venta INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL
);

CREATE TABLE producto(
	id_producto INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    descripcion VARCHAR(100) NOT NULL, 
    precio DECIMAL(10, 2) NOT NULL,
    estado BIT
);





/* CLAVES FORANEAS */
/* HABITACION */
ALTER TABLE habitacion
ADD CONSTRAINT fk_habitacion_categoria
FOREIGN KEY (id_categoria) REFERENCES categoria_habitacion(id_categoria);

ALTER TABLE habitacion
ADD CONSTRAINT fk_habitacion_piso
FOREIGN KEY (id_piso) REFERENCES piso(id_piso);

ALTER TABLE habitacion
ADD CONSTRAINT fk_habitacion_estado
FOREIGN KEY (id_estado_habitacion) REFERENCES estado_habitacion(id_estado_habitacion);

/* RESERVAS */
ALTER TABLE reserva
ADD CONSTRAINT fk_reserva_habitacion
FOREIGN KEY (id_habitacion) REFERENCES habitacion(id_habitacion);

ALTER TABLE reserva
ADD CONSTRAINT fk_reserva_cliente
FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente);

/* EMPLEADOS */
ALTER TABLE empleado
ADD CONSTRAINT fk_empleado_tipo
FOREIGN KEY (id_tipo_empleado) REFERENCES tipo_empleado(id_tipo_empleado);

/* CLIENTES */
ALTER TABLE cliente
ADD CONSTRAINT fk_cliente_tipoDocumento
FOREIGN KEY (id_tipo_documento) REFERENCES tipo_documento(id_tipo_documento);

/* USUARIO */
ALTER TABLE usuario 
ADD CONSTRAINT fk_usuario_tipo
FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuario(id_tipo_usuario);

ALTER TABLE usuario
ADD CONSTRAINT fk_usuario_empleado
FOREIGN KEY (cod_empleado) REFERENCES empleado(cod_empleado);

/* FACTURA */
ALTER TABLE factura
ADD CONSTRAINT fk_factura_reserva
FOREIGN KEY (nro_reserva) REFERENCES reserva(nro_reserva);

/* VENTA */
ALTER TABLE venta
ADD CONSTRAINT fk_venta_reserva
FOREIGN KEY (nro_reserva) REFERENCES reserva(nro_reserva);
 
ALTER TABLE venta
ADD CONSTRAINT fk_venta_estado
FOREIGN KEY (id_estado_venta) REFERENCES estado_venta(id_estado_venta);
 
SET SQL_SAFE_UPDATES = 0;