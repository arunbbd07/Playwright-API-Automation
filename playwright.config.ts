import { PlaywrightTestConfig } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

// Generate a unique folder name using a timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const reportFolder = path.join('playwright-report', timestamp);

// Ensure the report folder exists
fs.mkdirSync(reportFolder, { recursive: true });

const config: PlaywrightTestConfig = {
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results.json' }],
    //['html', { outputFolder: 'playwright-report' }],
    ['html', { outputFolder: reportFolder }],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    //timeout: parseInt(process.env.TIMEOUT || '30000'),
  },
};

export default config;
