const { json } = require("express");
const connection = require("../database");

// TODO: funciones para productos
const obtenerAdministradores = (req,res) => {
    connection.query("SELECT * FROM administradores",(error,results) => {
        if (error){
            console.error("Error al obtener los administradores",error);
            res.status(500).json({
                error: "Error al obtener administradores",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerAdministradoresPorId = (req,res) => {
    const id = req.params.id_administrador;

    connection.query('SELECT * FROM administradores WHERE id_administrador = ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener el administrador",error);
            res.status(500).json({error :"Ocurrio un error al obtener el administrador"});
        }else if(results.length === 0){
            res.status(500).json({error: "El administrador no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearAdministradores = (req,res) => {
    const {nombre,email,contrasena} = req.body;
    connection.query("INSERT INTO administradores (nombre, email, contrasena) VALUES (?,?,?)",
    [nombre,email,contrasena], (error,results) => {
        if (error){
            console.error("Error al agregar el administrador",error);
            res.status(500).json({error:"Error al agregar administrador"})
        }else{
        res.json({message: "administrador agregado"});
        }
    })
}

const actualizarAdministradoresPorId =(req,res) => {
    const id = req.params.id_administrador;
    const {nombre,email,contrasena} = req.body;
    connection.query('UPDATE administradores SET nombre = ?, email = ?, contrasena = ? WHERE id_administrador = ?',
    [nombre,email,contrasena,id],(error,results) => {
        console.error("Error al actualizar el administrador".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar el administrador"});
        }else{
            res.json({message:"El administrador fue actualizado correctamente"});
        }
    })
}

const eliminarAdministradoresPorId = (req,res) => {
    const id = req.params.id_administrador;

    connection.query('DELETE FROM administradores WHERE id_administrador = ?',[id],(error,results) => {
        console.error("Error al eliminar el administrador".error);
        if (error){
            res.status(500).json({error :"Ocurrio un error al eliminar el administrador"});
        }else{
            res.json({message:"El administrador fue elimanado correctamente"});
        }
    });
}

module.exports = {
    obtenerAdministradores,
    obtenerAdministradoresPorId,
    crearAdministradores,
    eliminarAdministradoresPorId,
    actualizarAdministradoresPorId,
};