'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');

const clientDir = path.join(__dirname, '../client')

const routing = client => {
  const filePath = path.join(clientDir, client.req.url === '/' ? 'index.html' : client.req.url);
  const ext = path.extname(filePath);
  let contentType = '';
  if(ext){
    switch(ext){
      case '.html':
      contentType = 'text/html';
      break;
      case '.css':
      contentType = 'text/css';
      break;
      case '.js':
      contentType = 'application/javascript';
      break;
      default:
      contentType = 'text/plain';
    }
  }
  getFile(client, { filePath, contentType });
}

const getFile = (client, { filePath, contentType }) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if(err){
      client.res.writeHead(404)
      client.res.end('404')
    }
    client.res.writeHead(200, {
      'Content-Type': contentType
    })
    client.res.end(data)
  });
}

http.createServer( (req, res) => {
  routing({req, res});
}).listen(8888, () => {
  console.log('Server was started');
})
