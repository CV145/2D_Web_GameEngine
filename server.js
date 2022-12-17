'use strict';
var http = require('http'); //Node.js web server
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');

//function to handle requests
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    //read from html file, writing its data as response
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        }
        else {
            response.write(data);
        }
        response.end();
    });
}

//200 response returns Hello World
http.createServer(handleRequest).listen(port);
