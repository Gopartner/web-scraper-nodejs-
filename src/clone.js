import path from 'path';
import scrape from 'website-scraper';
import { SingleBar, Presets } from 'cli-progress';
import { loadClonedWebsites } from './utils.js';
import { displayMenu } from './menu.js';

async function cloneWebsite(url, folderName, resultsDirectory, userAgent) {
// Ensure results directory exists
loadClonedWebsites(resultsDirectory);

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  
  const cloneDirectory = path.join(resultsDirectory, folderName);

  const options = {
    urls: [url],
    directory: cloneDirectory,
    request: {
      headers: {
        'User-Agent': userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
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
    return true;
  } catch (err) {
    console.error('An error occurred during cloning:', err);
    return false;
  } finally {
    displayMenu(resultsDirectory); // Show menu again after processing
  }
}

export { cloneWebsite };

