import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Canvas dimensions
const size = 512;
const canvas = createCanvas(size, size);
const context = canvas.getContext('2d');

// Brand colors
const colors = {
  primary: '#4f46e5',
  secondary: '#7c3aed',
  accent: '#8b5cf6',
  light: '#e0e7ff',
  white: '#ffffff'
};

// Background
context.fillStyle = colors.primary;
context.fillRect(0, 0, size, size);

// Draw a stylized "A"
context.fillStyle = colors.white;
context.font = `bold ${size * 0.6}px 'Inter', Arial, sans-serif`;
context.textAlign = 'center';
context.textBaseline = 'middle';
context.fillText('A', size / 2, size / 2);

// Add a subtle border
context.strokeStyle = colors.white + '80';
context.lineWidth = size * 0.02;
context.strokeRect(size * 0.1, size * 0.1, size * 0.8, size * 0.8);

// Save the logo
const buffer = canvas.toBuffer('image/png');
const outputPath = join(process.cwd(), 'client', 'public', 'logo.png');
writeFileSync(outputPath, buffer);

console.log(`Logo generated at: ${outputPath}`);
