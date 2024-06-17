import express from 'express';
import path from 'path';
import fs from 'fs';
import scrape from 'website-scraper';
import { SingleBar, Presets } from 'cli-progress';
import { fileURLToPath } from 'url';
import rl from './src/input.js';  // Import readline interface

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const resultsDirectory = path.join(__dirname, 'results');

// Function to start website cloning process
async function cloneWebsite(url) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const cloneDirectory = path.join(resultsDirectory, `cloned-website-${timestamp}`);

  const options = {
    urls: [url],
    directory: cloneDirectory,
    request: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }
  };

  // Initialize the progress bar
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
    progressBar.stop();
    return false;
  }
}

// Function to load cloned websites from results directory
function loadClonedWebsites() {
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

// Function to display menu and handle user input
function displayMenu() {
  console.log('1. Clone a new website');
  console.log('2. Run the cloned website');
  console.log('3. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (parseInt(choice)) {
      case 1:
        rl.question('Enter the URL of the website you want to clone: ', (url) => {
          cloneWebsite(url).then((success) => {
            if (success) {
              console.log('Website cloned successfully!');
            } else {
              console.log('Failed to clone website. Please try again.');
            }
            displayMenu(); // Show menu again after processing
          });
        });
        break;
      case 2:
        const clonedWebsites = loadClonedWebsites();
        if (clonedWebsites.length === 0) {
          console.log('No websites cloned yet. Please clone a website first.');
          displayMenu();
          return;
        }

        console.log('Cloned Websites:');
        clonedWebsites.forEach((website, index) => {
          console.log(`${index + 1}. ${website}`);
        });

        rl.question('Select a website to run (enter number): ', (selection) => {
          const selectedIndex = parseInt(selection) - 1;
          if (selectedIndex < 0 || selectedIndex >= clonedWebsites.length) {
            console.log('Invalid selection. Please enter a valid number.');
            displayMenu();
            return;
          }

          const selectedWebsite = clonedWebsites[selectedIndex];
          console.log(`Running the cloned website ${selectedWebsite}...`);

          app.use(express.static(path.join(resultsDirectory, selectedWebsite)));

          app.get('*', (req, res) => {
            res.sendFile(path.join(resultsDirectory, selectedWebsite, 'index.html'));
          });

          app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
          });
        });
        break;
      case 3:
        console.log('Exiting...');
        rl.close();
        process.exit(0); // Exit the program
        break;
      default:
        console.log('Invalid choice. Please enter a valid option.');
        displayMenu(); // Show menu again if invalid choice
        break;
    }
  });
}

// Start displaying menu
displayMenu();

