const url = require('url');
const mo = require('./modules/utils')
const httpInstance = require('http');
const portNumber = process.env.PORT || 8080;

const httpServer = httpInstance.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); 
    const queryString = parsedUrl.query; 
    const name = queryString.name;

    res.setHeader('Content-Type', 'text/html');
    res.write(mo.getDate(name));
    res.statusCode = 200;

    res.end();
});

httpServer.listen(portNumber, () => {
    console.log('Server is listening on port ' + portNumber);
});
