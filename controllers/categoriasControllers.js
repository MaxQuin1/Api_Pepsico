const { json } = require("express");
const connection = require("../database");


// TODO: funciones para categorias
const obtenerCategorias = (req,res) => {
    connection.query("SELECT * FROM categorias",(error,results) => {
        if (error){
            console.error("Error al obtener las categorias",error);
            res.status(500).json({
                error: "Error al obtener categorias",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerCategoriasPorId = (req,res) => {
    const id = req.params.id_categoria;

    connection.query('SELECT * FROM categorias WHERE id_categoria = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener la categoria",error);
            res.status(500).json({error :"Ocurrio un error al obtener la categoria"});
        }else if(results.length === 0){
            res.status(500).json({error: "La categoria no fue encontranda"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearCategorias = (req,res) => {
    const {nombre} = req.body;
    connection.query("INSERT INTO categorias (nombre) VALUES (?)",[nombre], (error,results) => {
        if (error){
            console.error("Error al agregar categoria",error);
            res.status(500).json({error:"Error al agregar caregoria"})
        }else{
        res.json({message: "Categoria agregada"});
        }
    })
}

const actualizarCategoriasPorId =(req,res) => {
    const id = req.params.id_categoria;
    const {nombre} = req.body;
    connection.query('UPDATE categorias SET nombre = ? WHERE id_categoria = ?',[nombre,id],(error,results) => {
        console.error("Error al actualizar la categoria".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar la categoria"});
        }else{
            res.json({message:"La categoria fue actualizada correctamente"});
        }
    })
}

const eliminarCategoriasPorId = (req,res) => {
    const id = req.params.id_categoria;

    connection.query('DELETE FROM categorias WHERE id_categoria = ?',[id],(error,results) => {
        console.error("Error al eliminar la categoria".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar la categoria"});
        }else{
            res.json({message:"La categoria fue elimanada correctamente"});
        }
    });
}

module.exports = {
    obtenerCategorias,
    obtenerCategoriasPorId,
    crearCategorias,
    eliminarCategoriasPorId,
    actualizarCategoriasPorId,
};