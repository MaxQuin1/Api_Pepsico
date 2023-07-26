const { json } = require("express");
const connection = require("../database");


// TODO: funciones para marcas
const obtenerMarcas = (req,res) => {
    connection.query("SELECT * FROM marcas",(error,results) => {
        if (error){
            console.error("Error al obtener las marcas",error);
            res.status(500).json({
                error: "Error al obtener marcas",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerMarcasPorId = (req,res) => {
    const id = req.params.id_marca;

    connection.query('SELECT * FROM marcas WHERE id_marca = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener la marca",error);
            res.status(500).json({error :"Ocurrio un error al obtener la marca"});
        }else if(results.length === 0){
            res.status(500).json({error: "La marca no fue encontranda"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearMarcas = (req,res) => {
    const {nombre,imagen} = req.body;
    connection.query("INSERT INTO marcas (nombre,imagen) VALUES (?,?)",[nombre,imagen], (error,results) => {
        if (error){
            console.error("Error al agrega marca",error);
            res.status(500).json({error:"Error al agregar marca"})
        }else{
        res.json({message: "Marca agregada"});
        }
    })
}

const actualizarMarcasPorId =(req,res) => {
    const id = req.params.id_marca;
    const {nombre,imagen} = req.body;
    connection.query('UPDATE marcas SET nombre = ?, imagen = ? WHERE id_marca = ?',[nombre,imagen,id],(error,results) => {
        console.error("Error al actualizar la marca".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar la marca"});
        }else{
            res.json({message:"La marca fue actualizada correctamente"});
        }
    })
}

const eliminarMarcasPorId = (req,res) => {
    const id = req.params.id_marca;

    connection.query('DELETE FROM marcas WHERE id_marca = ?',[id],(error,results) => {
        console.error("Error al eliminar la marca".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar la marca"});
        }else{
            res.json({message:"La marca fue elimanada correctamente"});
        }
    });
}

module.exports = {
    obtenerMarcas,
    obtenerMarcasPorId,
    crearMarcas,
    eliminarMarcasPorId,
    actualizarMarcasPorId,
};