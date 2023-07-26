const { json } = require("express");
const connection = require("../database");


// TODO: funciones para estados
const obtenerEstados = (req,res) => {
    connection.query("SELECT * FROM estados",(error,results) => {
        if (error){
            console.error("Error al obtener Els estados",error);
            res.status(500).json({
                error: "Error al obtener estados",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerEstadosPorId = (req,res) => {
    const id = req.params.id_estado;

    connection.query('SELECT * FROM estados WHERE id_estado = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener El estado",error);
            res.status(500).json({error :"Ocurrio un error al obtener El estado"});
        }else if(results.length === 0){
            res.status(500).json({error: "El estado no fue encontranda"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearEstados = (req,res) => {
    const {estado} = req.body;
    connection.query("INSERT INTO estados (estado) VALUES (?)",[estado], (error,results) => {
        if (error){
            console.error("Error al agrega estado",error);
            res.status(500).json({error:"Error al agregar estado"})
        }else{
        res.json({message: "Estado agregado"});
        }
    })
}

const actualizarEstadosPorId =(req,res) => {
    const id = req.params.id_estado;
    const {estado} = req.body;
    connection.query('UPDATE estados SET estado = ? WHERE id_estado = ?',[estado,id],(error,results) => {
        console.error("Error al actualizar El estado".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar el estado"});
        }else{
            res.json({message:"El estado fue actualizada correctamente"});
        }
    })
}

const eliminarEstadosPorId = (req,res) => {
    const id = req.params.id_estado;

    connection.query('DELETE FROM estados WHERE id_estado = ?',[id],(error,results) => {
        console.error("Error al eliminar El estado".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar la estado"});
        }else{
            res.json({message:"El estado fue elimanada correctamente"});
        }
    });
}

module.exports = {
    obtenerEstados,
    obtenerEstadosPorId,
    crearEstados,
    eliminarEstadosPorId,
    actualizarEstadosPorId,
};