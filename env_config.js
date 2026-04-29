const http = require('http');

// беремо порт з ENV, якщо нема — fallback на CLI або 3000
const port = process.env.PORT || process.argv[2] || 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
    } else {
        res.writeHead(404);
        res.end();
    }

});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});