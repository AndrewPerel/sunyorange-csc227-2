const { readFile } = require('fs');
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require("fs");

function rootHander(req, res, parsedUrl) {
    const page = `
<!DOCTYPE html>
<html>
<head>
<title>Javascript Web Server</title>
</head>
<body>
<h1>Javascript Web Server</h1>
<p>Homepage</p>
</body>
</html> `;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(page);
}

function echoValApiHandler(req, res, parsedUrl) {
    const v = parsedUrl.query.val;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ val: v }));
}

function currentTime(res) {
    const time = new Date().toTimeString();
    const page = `<!DOCTYPE html>
<html>
<body>
<p>The current time is: ${time}</p>
</body>
</html>`;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(page);
}

function addNum(req, res, parsedUrl) {
    const result = Number(parsedUrl.query.a) + Number(parsedUrl.query.b);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ val: result }));
}

function form(res) {

    fs.readFile(__dirname + "/Lab 9 Form.html", function (error, html) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    });
}

function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/") {
        rootHander(req, res, parsedUrl);
    }
    else if (parsedUrl.pathname === "/time") {
        currentTime(res);
    }
    else if (parsedUrl.pathname === "/form") {
        form(res);
    }
    else if (parsedUrl.pathname === "/api/echoVal") {
        echoValApiHandler(req, res, parsedUrl);
    }
    else if (parsedUrl.pathname === "/api/addNums") {
        addNum(req, res, parsedUrl);
    }
    else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
}

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});