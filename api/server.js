// write the server here and export it
const express = require('express');
const server = express();




//HTTP METHOD, PATH





//GET/


server.get('/', (req, res) => {
    res.send('heyaaaaaaa');
})

server.get('./hello', (req,res) => {
    res.send('wassup')
})

module.exports = server;
