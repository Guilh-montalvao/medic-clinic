
const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Starting development server with Vite...');
  execSync('npx vite --port 8080', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting development server:', error);
  process.exit(1);
}
