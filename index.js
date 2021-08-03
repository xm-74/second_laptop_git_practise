const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/HTML');
	res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Travelogues24</title></head><body><p>Just some random text</p></body></html> ');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
})

