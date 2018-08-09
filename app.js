const http = require('http');
const fs = require('file-system')
const hostname = '127.0.0.1';
const port = 3000;

const placeIntoScript = (js) => `
<html>
  <head>
    <style>
      body {
        padding: 40px 0;
        background-color: #4bf;
        color: #fff;
        font-family: sans-serif;
        text-align: center;
      }
      #BandImg {
        border-radius: 10px;
      }
      #Title {
        font-size: 100px;
      }
      #Input {
        border: 1px solid white;
        border-radius: 3px;
        padding: 3px;
        margin-right: 10px;
      }
      #Button {
        border: 1px solid white;
        border-radius: 3px;
        padding: 3px 10px;
      }
      #Button:active {
        background-color: red;
        color: white;
      }
    </style>
  </head>
  <body>
  </body>
  <script>
    ${js}
  </script>
</html>
`

fs.readFile('index.js', 'utf8', (err, js) => {
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
