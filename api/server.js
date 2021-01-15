// write the server here and export it
const Dog = require('./dog-model.js');
const express = require('express');
const server = express();






server.use(express.json());



server.get('/', (req, res) => {
    res.send('heyaaaaaaa');
})

server.get('./hello', (req,res) => {
    res.send('wassup')
})


server.post('./api/dogs', async (req,res) => {
    const dog = req.body;

    //try catch block

    try {
        const newlyCreatedDog =  await Dog.create(dog);
        res.status(200).json(newlyCreatedDog);

    }catch(err) {

        res.status(500).json({ error:err.message });

    }
})





module.exports = server;
