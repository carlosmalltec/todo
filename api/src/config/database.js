const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/todo';

mongoose
    .connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        // console.log('conexao com sucesso');
    })
    .catch(err => {
        //console.log(err.message);
    });

module.exports = mongoose;