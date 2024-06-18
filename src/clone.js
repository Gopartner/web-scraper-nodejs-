import path from 'path';
import scrape from 'website-scraper';
import { SingleBar, Presets } from 'cli-progress';
import { createResultsDirectory } from './utils.js';
import { displayMenu } from './menu.js';

async function cloneWebsite(url) {
  createResultsDirectory(); // Ensure results directory exists

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  const folderName = await promptUser('Masukkan nama untuk folder hasil clone: ');
  const cloneDirectory = path.join(resultsDirectory, folderName);

  const options = {
    urls: [url],
    directory: cloneDirectory,
    request: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }
  };

  const progressBar = new SingleBar({
    format: 'Cloning process... |{bar}| {percentage}% || {value}/{total} Files',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  }, Presets.shades_classic);

  console.log('Starting the cloning process...');
  progressBar.start(100, 0);

  try {
    await scrape(options);
    progressBar.update(100);
    progressBar.stop();
    console.clear();
    console.log('Website successfully downloaded');
    console.log('Newly cloned website:', cloneDirectory);
  } catch (err) {
    console.error('An error occurred during cloning:', err);
  } finally {
    displayMenu(); // Show menu again after processing
  }
}

function promptUser(question) {
  // Simulated function for prompting user input
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

export { cloneWebsite };

