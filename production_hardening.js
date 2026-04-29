const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    // Security headers (для всіх відповідей)
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'no-referrer');

    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Обробка preflight
    if (req.method === 'OPTIONS' && req.url === '/health') {
        res.statusCode = 204;
        return res.end();
    }

    try {
        // GET /health
        if (req.method === 'GET' && req.url === '/health') {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            return res.end(JSON.stringify({ ok: true }));
        }

        // GET /boom
        if (req.method === 'GET' && req.url === '/boom') {
            throw new Error('Simulated crash');
        }

        // інші маршрути
        res.statusCode = 404;
        res.end('Not Found');

    } catch (err) {
        //  Обробка помилки
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});