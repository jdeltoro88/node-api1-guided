// import the server and start it
const server = require('./api/server.js');


const PORT = 5000;

server.listen(PORT, () => {
    console.log(`\n*** server listening on port ${PORT} ***\n`)
})