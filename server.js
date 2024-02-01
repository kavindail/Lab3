const { URLSearchParams } = require('url');
const mo = require('./modules/utils')

const httpInstance = require('http');
const portNumber = 8080;

const httpServer = httpInstance.createServer((req, res) => {
    const queryString = window.location.search; 
    const URLparams = new URLSearchParams(queryString);
    const name = URLparams.get(name);

    res.setHeader('Content-Type', 'text/html');
    res.write('Response from server');
    res.write(`response was ${name}`);
    res.write(mo.getInfo());
    res.statusCode = 200;

    res.end();
});

httpServer.listen(portNumber, () => {
    console.log('Server is listening on port ' + portNumber);
});
