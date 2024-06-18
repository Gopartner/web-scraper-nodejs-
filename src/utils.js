import fs from 'fs';
import path from 'path';

function loadClonedWebsites(resultsDirectory) {
  try {
    return fs.readdirSync(resultsDirectory).filter((file) => {
      return fs.statSync(path.join(resultsDirectory, file)).isDirectory();
    });
  } catch (error) {
    console.error('Error reading results directory:', error.message);
    return [];
  }
}

export { loadClonedWebsites };

