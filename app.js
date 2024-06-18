import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { displayMenu } from './src/menu.js';

// Define __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resultsDirectory = path.join(__dirname, 'results');

// Start displaying menu
displayMenu(resultsDirectory);

