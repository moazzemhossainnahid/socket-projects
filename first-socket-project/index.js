const express = require('express');
const app = express();
const http = require('http');
const { hostname } = require('os');
const expressServer = http.createServer(app);


app.get('/', (req, res) => {
res.sendFile(__dirname+'/index.html')
})

expressServer.listen(3000, function(){
    console.log("Server run @ 3000");
})