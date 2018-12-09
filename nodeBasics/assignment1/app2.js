const http = require('http');

const server = http.createServer( (req, resp) => {
    const url = req.url;
    const method = req.method;

    resp.setHeader('Content-Type', 'text/html');

    if(url === '/') {
        resp.write('<html>');
        resp.write('<head><title>Welcome to assignment one</title></head>');
        resp.write('<body>\
        <h1>Please enter some text!</h1>\
        <form action="/create-user" method="POST">\
            <input type ="text" name="message"><button type="submit">Send</button>\
        </form>\
        </body>')
        resp.write('</html>');
        return resp.end();
    } else if (url === '/users') {
        resp.write('<html>');
        resp.write('<head><title>Assignment one - users list</title></head>');
        resp.write('<body>')
        resp.write('<h1>Here are some users</h1>')
        resp.write('<ul>')
        resp.write('<li>User One</li>')
        resp.write('<li>User Two</li>')
        resp.write('<li>User Three</li>')
        resp.write('<li>User Four</li>')
        resp.write('</ul>')
        resp.write('</body>')
        resp.write('</html>');
        return resp.end();
    } else if(url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            console.log('chunk: ' + chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody: ' + parsedBody);
            let userText = parsedBody.split('=')[1];
            userText = userText.replace('+',' ');
            console.log('userText: ' + userText);
        });
        resp.statusCode = 302;
        resp.setHeader('Location', '/');
        return resp.end();
    }
});

server.listen(3000);
