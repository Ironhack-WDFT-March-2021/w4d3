// sets up express
const express = require('express');
const app = express();

// this line is needed to register the public folder so that the content (all the 
// public assets is accesible in the browser)

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    console.log(__dirname);
    // response.send('<h1>Welcome to the Home Page 👋</h1>');
    response.sendFile(__dirname + '/views/home-page.html');
})

app.get('/dog', (request, response) => {
    // response.send('<h1>This is the dog page</h1>');
    response.sendFile(__dirname + '/views/dog-page.html');
})

app.listen(3000, () => {
    console.log('Server listening');
})