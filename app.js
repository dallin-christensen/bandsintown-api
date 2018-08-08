const http = require('http');
const fs = require('file-system')
const hostname = '127.0.0.1';
const port = 3000;

const placeIntoScript = (js) => `<script>${js}</script>`

fs.readFile('index.html', 'utf8', (err, js) => {
  if (err) return
  
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(placeIntoScript(js))
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})
