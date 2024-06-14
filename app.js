import scrape from 'website-scraper';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const cloneDirectory = path.join(__dirname, `cloned-website-${timestamp}`);

const options = {
  urls: ['https://dout.diuey.com/'],
  directory: cloneDirectory,
  request: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
    }
  }
};

scrape(options).then(() => {
  console.log('Website successfully downloaded');

  // Serve the cloned website
  app.use(express.static(cloneDirectory));

  app.get('*', (req, res) => {
    res.sendFile(path.join(cloneDirectory, 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('An error occurred', err);
});

