const { json } = require("express");
const connection = require("../database");

const obtenerProductosPorMarcas= (req,res) => {
    const marca = req.params.nombre;
    connection.query(
        /*SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE marcas.nombre LIKE '%grupo gepp%'; */
        'SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE marcas.nombre LIKE ?;',
        [`%${marca}%`],
        (error, results) => {
        if (error){
            console.error("Error al obtener el nombre",error);
            res.status(500).json({error :"Ocurrio un error al obtener el nombre"});
        }else if(results.length === 0){
            res.status(500).json({error: "El nombre no fue encontrando"});
        }else{
            res.json(results);
        }
    });

}

const obtenerProductosPorNombre= (req,res) => {
    const nombre = req.params.nombre;
    connection.query(
        /*SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE marcas.nombre LIKE '%grupo gepp%'; */
        'SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE productos.nombre LIKE ?;',
        [`%${nombre}%`],
        (error, results) => {
        if (error){
            console.error("Error al obtener el nombre",error);
            res.status(500).json({error :"Ocurrio un error al obtener el nombre"});
        }else if(results.length === 0){
            res.status(500).json({error: "El nombre no fue encontrando"});
        }else{
            res.json(results);
        }
    });
}

const obtenerProductosPorDescripcion= (req,res) => {
    const descripcion = req.params.descripcion;
    connection.query(
        /*SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE marcas.nombre LIKE '%grupo gepp%'; */
        'SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca WHERE productos.descripcion LIKE ?;',
        [`%${descripcion}%`],
        (error, results) => {
        if (error){
            console.error("Error al obtener la descripcion",error);
            res.status(500).json({error :"Ocurrio un error al obtener la descripcion"});
        }else if(results.length === 0){
            res.status(500).json({error: "La descripcion no fue encontrando"});
        }else{
            res.json(results);
        }
    });
}

module.exports = {
    obtenerProductosPorMarcas,
    obtenerProductosPorNombre,
    obtenerProductosPorDescripcion,
};