const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//habilitar nosso server de modo que ele consiga receber o protocolo WebSocket
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://omnistackweek:rocketseat123@ds123625.mlab.com:23625/omnistakweek-backend', 
    {
        useNewUrlParser: true
    }
);

//intermediação das requisições feitas pelo meu servidor
app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
//dizer ao express que todas as requisições serão em JSON
app.use(express.json());

app.use(require('./routes.js'));

server.listen(3000, () => {
    console.log('Server started on port 3000 =D');
});