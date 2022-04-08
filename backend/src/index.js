const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://caiocal:caiocal@cluster0.pxnen.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors({
    // origin: 'https://localhost:3000'
}))
app.use(express.json());
app.use(routes)
app.listen(3333);

// Tipos de Parametros:

//Query Params: request.query( filtros, ordenação, paginação ...)
//Route params: request.params ( identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (não-Relacional)

