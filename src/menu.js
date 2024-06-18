import { cloneWebsite } from './websiteCloner.js';
import { loadClonedWebsites } from './utils.js';
import rl from './input.js';
import express from 'express';
import path from 'path';
import fs from 'fs';

const port = 3000;
let server;

function clearTerminal() {
  process.stdout.write('\x1Bc');
}

function displayMenu(resultsDirectory) {
  console.log('1. Clone a new website');
  console.log('2. Run the cloned website');
  console.log('3. Exit');

  rl.question('Enter your choice: ', (choice) => {
    switch (parseInt(choice)) {
      case 1:
        rl.question('Enter the URL of the website you want to clone: ', (url) => {
          rl.question('Enter the name for the cloned folder: ', async (folderName) => {
            const success = await cloneWebsite(url, folderName, resultsDirectory);
            if (success) {
              console.log('Website cloned successfully!');
            } else {
              console.log('Failed to clone website. Please try again.');
            }
            clearTerminal();
            displayMenu(resultsDirectory); // Show menu again after processing
          });
        });
        break;
      case 2:
        try {
          const clonedWebsites = loadClonedWebsites(resultsDirectory);
          if (clonedWebsites.length === 0) {
            console.log('No websites cloned yet. Please clone a website first.');
            clearTerminal();
            displayMenu(resultsDirectory);
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
              clearTerminal();
              displayMenu(resultsDirectory);
              return;
            }

            const selectedWebsite = clonedWebsites[selectedIndex];
            console.log(`Running the cloned website ${selectedWebsite}...`);

            const app = express();
            app.use(express.static(path.join(resultsDirectory, selectedWebsite)));

            app.get('*', (req, res) => {
              const rootPath = path.join(resultsDirectory, selectedWebsite);
              const potentialPaths = [
                path.join(rootPath, 'index.html'),
                path.join(rootPath, 'src', 'index.html'),
                path.join(rootPath, 'public', 'index.html'),
                path.join(rootPath, 'dist', 'index.html'),
              ];

              let fileFound = false;
              for (const filePath of potentialPaths) {
                if (fs.existsSync(filePath)) {
                  res.sendFile(filePath);
                  fileFound = true;
                  break;
                }
              }

              if (!fileFound) {
                res.status(404).send('404 Not Found');
              }
            });

            server = app.listen(port, () => {
              console.log(`Server is running at http://localhost:${port}`);
              console.log('Type "q" to stop the server and return to the menu.');

              process.stdin.resume();
              process.stdin.setEncoding('utf8');

              const onDataHandler = (data) => {
                if (data.trim() === 'q') {
                  server.close(() => {
                    console.log('Server stopped.');
                    process.stdin.removeListener('data', onDataHandler);
                    clearTerminal();
                    displayMenu(resultsDirectory);
                  });
                }
              };

              process.stdin.on('data', onDataHandler);
            });
          });
        } catch (error) {
          console.error('Error loading cloned websites:', error.message);
          clearTerminal();
          displayMenu(resultsDirectory);
        }
        break;
      case 3:
        console.log('Exiting...');
        rl.close();
        process.exit(0); // Exit the program
        break;
      default:
        console.log('Invalid choice. Please enter a valid option.');
        clearTerminal();
        displayMenu(resultsDirectory); // Show menu again if invalid choice
        break;
    }
  });
}

export { displayMenu };

