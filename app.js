import scrape from 'website-scraper';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { SingleBar, Presets } from 'cli-progress';

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

// Initialize the progress bar
const progressBar = new SingleBar({
  format: 'Cloning Website |{bar}| {percentage}% || {value}/{total} Files',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true
}, Presets.shades_classic);

console.log('Starting the cloning process...');

// Mock progress for demonstration
let totalFiles = 100;
progressBar.start(totalFiles, 0);

let interval = setInterval(() => {
  progressBar.increment();
  if (progressBar.value >= totalFiles) {
    clearInterval(interval);
  }
}, 100); // Adjust this interval to simulate realistic progress

scrape(options).then(() => {
  console.log('Website successfully downloaded');
  progressBar.stop();

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
  progressBar.stop();
});

