const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {

}

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUsers[user] = socket.id;
})


async function mongoConnect() {
    try {
        console.log('CONECTANDO...')
        await mongoose.connect('mongodb://localhost:27017/tindev', {
            useNewUrlParser: true,
            dbName: 'tindev'
        })
        console.log('CONECTADO!')
    } catch(err) {
        console.error('ERRO! ', err)
    }
}

mongoConnect(); 

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333); 
