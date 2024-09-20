import { createServer } from 'http';
import { URL } from 'url';

const server = createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
});