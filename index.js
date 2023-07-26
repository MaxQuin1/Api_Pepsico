// ! dependencias
const express = require("express");
const cors = require("cors");

const categoriasRouter = require('./router/categoriasRouter');
const productosRouter = require('./router/productosRouter');
const administradoresRouter = require('./router/administradoresRouter');
const clientesRouter = require('./router/clientesRouter');
const marcasRouter = require('./router/marcasRouter');
const estadosRouter = require('./router/estadosRouter');
const pedidosRouter = require('./router/pedidosRouter');
const busquedasRouter = require('./router/busquedasRouter')
const loginRouter = require('./router/busquedasRouter')

//* app va a tener todos los atributos y metodos de express
const app = express();

app.use(cors());
app.use(express.json());

// Ruta al router"
app.use("/categorias", categoriasRouter);
app.use("/productos", productosRouter);
app.use("/administradores", administradoresRouter);
app.use("/clientes", clientesRouter);
app.use("/marcas", marcasRouter);
app.use("/estados", estadosRouter);
app.use("/pedidos", pedidosRouter);
app.use("/busquedas", busquedasRouter);
app.use("/login", loginRouter);

app.get("/",(req,res) => {
    res.send("<h1> Hola mundo </h1>");
});

// app.get('/hello',(req,res) => {
//     res.send(`<h1> Hola mundo secreto </h1>`);
// });

app.listen(3001,() => {
    console.log("Api escuchando por el puerto 3001");
});