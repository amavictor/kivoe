import fs from 'fs';
import path from 'path';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const APP_DIR = './app/';

const releaseJson = {
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description || "Kivoe AI assistant",
  license: packageJson.license || "MIT",
  author: packageJson.author || "Reeework Agency",
  main: "./dist/main/main.js",
  scripts: {
    postinstall: "./node_modules/.bin/electron-rebuild && node ../scripts/link-modules.js",
    "link-modules": "node ../scripts/link-modules.js",
  },
  dependencies: packageJson.nativeDependencies || {
    "systeminformation": "^5.27.8",
    "tree-kill": "^1.2.2",
    "os-utils": "^0.0.14"
  }
};

// Create app directory if it doesn't exist
if (!fs.existsSync(APP_DIR)) {
  fs.mkdirSync(APP_DIR, { recursive: true });
}

// Write the app package.json
fs.writeFileSync(
  path.join(APP_DIR, 'package.json'),
  JSON.stringify(releaseJson, null, 2)
);

console.log('✅ Created app/package.json with native dependencies');