const http = require('http');

// anonymous function using next gen arrow syntax (and all it entails)
const server = http.createServer( (req, resp) => {
    // console.log(req.url + '\n' + req.method + '\n' + req.headers);

    const url = req.url;

    if (url === '/') {
        resp.write('<html>');
        resp.write('<head><title>My First Node.js page</title></head>');
        resp.write('<body><form action="/message" method="POST"><input type ="text"><button type="submit">Send</button></form></body>');
        resp.write('</html>');
        return resp.end();
    }

    resp.setHeader('Content-Type', 'text/html');
    resp.write('<html>');
    resp.write('<head><title>My First Node.js page</title></head>');
    resp.write('<body><h1>Hello from my node.js server!</h1></body>');
    resp.write('</html>');
    resp.end();
} );

// listening on port 3000 (Max says it's a common port - for node js to listen on?)
server.listen(3000);
