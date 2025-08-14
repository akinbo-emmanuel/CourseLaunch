import { createCanvas, loadImage } from 'canvas';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Canvas dimensions (1200x630 is the recommended size for Open Graph images)
const width = 1200;
const height = 630;

// Create canvas
const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// Background gradient
const gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#4f46e5');
gradient.addColorStop(1, '#7c3aed');
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// Add text
context.fillStyle = '#ffffff';
context.textAlign = 'center';

// Main title
context.font = 'bold 64px "Arial", sans-serif';
context.fillText('Academic Excellence', width / 2, 200);
context.fillText('Masterclass', width / 2, 280);

// Subtitle
context.font = '32px "Arial", sans-serif';
context.fillText('Unlock Your Academic Potential', width / 2, 350);

// Add logo or additional elements if needed
// Example: const logo = await loadImage('path/to/logo.png');
// context.drawImage(logo, 50, 50, 200, 200);

// Save the image
const buffer = canvas.toBuffer('image/png');
const outputPath = join(__dirname, '../client/public/og-image.png');
writeFileSync(outputPath, buffer);

console.log(`Open Graph image generated at: ${outputPath}`);
