import fs from 'fs';
import path from 'path';
import rl from './input.js';

// Load user agents from JSON file
const __dirname = path.resolve();
const userAgentsPath = path.join(__dirname, 'src', 'data', 'user-agents.json');
const userAgents = JSON.parse(fs.readFileSync(userAgentsPath, 'utf-8'));

// Function to display menu and get user input
function userAgentMenu() {
    console.log('Select a User Agent:');
    userAgents.forEach((agent, index) => {
        console.log(`${index + 1}. ${agent.name}`);
    });

    rl.question('Enter the number of the user agent you want to select: ', (answer) => {
        const selectedIndex = parseInt(answer) - 1;
        if (selectedIndex >= 0 && selectedIndex < userAgents.length) {
            console.log(`You selected: ${userAgents[selectedIndex].name}`);
            console.log(`User Agent String: ${userAgents[selectedIndex].userAgent}`);
        } else {
            console.log('Invalid selection. Please try again.');
        }
        rl.close();
    });
}

export { userAgentMenu };

