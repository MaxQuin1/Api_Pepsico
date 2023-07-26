const { json } = require("express");
const connection = require("../database");

// TODO: funciones para productos
const obtenerProductos = (req,res) => {
    connection.query("SELECT productos.id_producto AS id_producto, productos.nombre AS nombre, productos.descripcion AS descripcion, productos.precio AS precio, marcas.nombre AS marca, productos.imagen AS imagen FROM productos INNER JOIN marcas ON productos.id_marca = marcas.id_marca;"
    ,(error,results) => {
        if (error){
            console.error("Error al obtener lo productos",error);
            res.status(500).json({
                error: "Error al obtener productos",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerProductosPorId = (req,res) => {
    const id = req.params.id_producto;

    connection.query('SELECT * FROM productos WHERE id_producto = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener el producto",error);
            res.status(500).json({error :"Ocurrio un error al obtener el producto"});
        }else if(results.length === 0){
            res.status(500).json({error: "El producto no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearProductos = (req,res) => {
    const {nombre,descripcion,precio,id_marca,imagen} = req.body;
    connection.query("INSERT INTO productos (nombre, descripcion, precio,id_marca, imagen) VALUES (?,?,?,?,?)",
    [nombre,descripcion,precio,id_marca,imagen], (error,results) => {
        if (error){
            console.error("Error al agregar el producto",error);
            res.status(500).json({error:"Error al agregar producto"})
        }else{
        res.json({message: "Producto agregado"});
        }
    })
}

const actualizarProductosPorId =(req,res) => {
    const id = req.params.id_producto;
    const {nombre,descripcion,precio,id_marca,imagen} = req.body;
    connection.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, id_marca = ?, imagen = ? WHERE id_producto = ?',
    [nombre,descripcion,precio,id_marca,imagen,id],(error,results) => {
        console.error("Error al actualizar el producto".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar el producto"});
        }else{
            res.json({message:"El producto fue actualizado correctamente"});
        }
    })
}

const eliminarProductosPorId = (req,res) => {
    const id = req.params.id_producto;

    connection.query('DELETE FROM productos WHERE id_producto = ?',[id],(error,results) => {
        console.error("Error al eliminar el producto".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar el producto"});
        }else{
            res.json({message:"El producto fue elimanado correctamente"});
        }
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductosPorId,
    crearProductos,
    eliminarProductosPorId,
    actualizarProductosPorId,
};