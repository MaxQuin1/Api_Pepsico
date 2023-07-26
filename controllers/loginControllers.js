const { json } = require("express");
const connection = require("../database");

function Login (request, response) {
const email = request.body.email;
const password = request.body.password;

connection.query(`SELECT * FROM clientes WHERE email = ? AND contrasena 
= ?`, [email,password], (error, result) => {
if(result.length == 0){
response.status(200).json(
{
respuesta: "no se encontro usuario",
length: result.length,
status: false
} 
); 
}
else {
response.status(200).json(
{
respuesta: result,
length: result.length,
status: true,
}
); 
} 
})
};
module.exports = {
    Login
}