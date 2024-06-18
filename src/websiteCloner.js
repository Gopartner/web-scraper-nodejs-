import scrape from 'website-scraper';
import path from 'path';

async function cloneWebsite(url, folderName, resultsDirectory) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const cloneDirectory = path.join(resultsDirectory, `${folderName}-${timestamp}`);

  const options = {
    urls: [url],
    directory: cloneDirectory,
    request: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      }
    }
  };

  try {
    await scrape(options);
    return true;
  } catch (error) {
    console.error('Error cloning website:', error.message);
    return false;
  }
}

export { cloneWebsite };

