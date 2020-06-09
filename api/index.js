const express = require('express');
const server = express();
server.use(express.json());
const config = require('./src/config/configuracao_ambiente');

//ROUTAS    
const TaskController = require('./src/routes/TaskRoutes');
server.use('/task',TaskController);

server.get('/',(req,res)=>{
    res.send('EM CONSTRUÇÃO!');
});

server.listen(config.PORTA, () => {
    // console.log("O servidor está rodadndo na " + config.PORTA);
});