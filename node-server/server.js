// First Node Server
const http = require('http');

const port = 3000;

const server = http.createServer(function (request, response) {
    console.log('this is the request handler');
    console.log(request.url);
    if (request.url === '/') {
        response.write('<h1>Hello from the Home Page</h1>');
    }
    else if (request.url === '/about') {
        response.write('<h1>Hello from the About Page</h1>');
    } else {
        response.write('<h1>404 - Not Found</h1>');
    }
    response.end();

    // response.end('<h1>Hello from the node server</h1>');
});

server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
})