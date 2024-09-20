import { createServer } from 'http';
import { URL } from 'url';

const server = createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && parsedUrl.pathname === '/get') {
        const data = [
          { name: 'John', age: 30 },
          { name: 'Jane', age: 25 },
          { name: 'Bob', age: 40 },
        ];
        const jsonData = JSON.stringify(data);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(jsonData);
      }
      else if (req.method === 'POST' && parsedUrl.pathname === '/post') {
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`Hello World! - POST Request with body: ${body}`);
        });
      }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});