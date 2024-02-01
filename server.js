const { URLSearchParams } = require('url');

const mo = require('../modules/utils');

module.exports = (req, res) => {
    const URLparams = new URLSearchParams(req.url.replace('/', ''));
    const name = URLparams.get('name');

    res.setHeader('Content-Type', 'text/html');
    res.write('Response from server\n');
    res.write(`response was ${name}\n`);
    res.write(mo.getInfo());
    res.end();
};
