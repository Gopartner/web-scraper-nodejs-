import fs from 'fs';
import path from 'path';

function loadClonedWebsites(resultsDirectory) {
  try {
    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory);
    }
    const directories = fs.readdirSync(resultsDirectory);
    return directories.filter(dir => fs.statSync(path.join(resultsDirectory, dir)).isDirectory());
  } catch (err) {
    console.error('Error loading cloned websites:', err.message);
    return [];
  }
}

export { loadClonedWebsites };

