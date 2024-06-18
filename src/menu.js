import { cloneWebsite } from './websiteCloner.js';
import { loadClonedWebsites } from './utils.js';
import rl from './input.js'; // Import readline interface
import express from 'express';
import path from 'path';

const port = 3000;

function displayMenu(app, resultsDirectory) {
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
            displayMenu(app, resultsDirectory); // Show menu again after processing
          });
        });
        break;
      case 2:
        const clonedWebsites = loadClonedWebsites(resultsDirectory);
        if (clonedWebsites.length === 0) {
          console.log('No websites cloned yet. Please clone a website first.');
          displayMenu(app, resultsDirectory);
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
            displayMenu(app, resultsDirectory);
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
        displayMenu(app, resultsDirectory); // Show menu again if invalid choice
        break;
    }
  });
}

export { displayMenu };

