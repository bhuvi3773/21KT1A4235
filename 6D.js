const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});
const PORT = 8080; server.listen(PORT, () => {
    console.log("Server is running on http://localhost:8080");
});