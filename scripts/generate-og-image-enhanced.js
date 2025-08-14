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

// Brand colors
const brandColors = {
  primary: '#4f46e5',    // Indigo-600
  secondary: '#7c3aed',  // Violet-600
  accent: '#8b5cf6',     // Violet-500
  light: '#e0e7ff',      // Indigo-100
  white: '#ffffff',
  dark: '#1e1b4b'        // Indigo-950
};

// Background gradient with brand colors
const gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, brandColors.primary);
gradient.addColorStop(0.5, brandColors.secondary);
gradient.addColorStop(1, brandColors.accent);
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// Add decorative elements
context.fillStyle = brandColors.white + '20';  // 20% opacity
for (let i = 0; i < 10; i++) {
  const size = Math.random() * 200 + 100;
  const x = Math.random() * width;
  const y = Math.random() * height;
  context.beginPath();
  context.arc(x, y, size / 2, 0, Math.PI * 2);
  context.fill();
}

// Add text
context.fillStyle = brandColors.white;
context.textAlign = 'center';

// Main title with shadow for better readability
context.shadowColor = brandColors.dark + '80';
context.shadowBlur = 10;
context.shadowOffsetX = 2;
context.shadowOffsetY = 2;

// Main title
context.font = 'bold 72px "Inter", "Arial", sans-serif';
context.fillText('ACADEMIC EXCELLENCE', width / 2, 300);

// Subtitle with different weight
context.font = '600 42px "Inter", "Arial", sans-serif';
context.fillText('Masterclass', width / 2, 380);

// Reset shadow
context.shadowColor = 'transparent';

// Add call-to-action text at the bottom
context.fillStyle = brandColors.light + 'cc';
context.font = '24px "Inter", "Arial", sans-serif';
context.fillText('Unlock Your Academic Potential', width / 2, 520);

// Add logo (if available) or brand name
const addLogo = async () => {
  try {
    // Try to load logo from public directory
    const logoPath = join(__dirname, '../client/public/logo.png');
    const logo = await loadImage(logoPath);
    
    // Calculate logo dimensions (maintaining aspect ratio)
    const logoAspectRatio = logo.width / logo.height;
    const logoWidth = 200;
    const logoHeight = logoWidth / logoAspectRatio;
    
    // Position logo at the top
    context.drawImage(logo, 50, 50, logoWidth, logoHeight);
    
  } catch (error) {
    console.log('No logo found, using text instead');
    // Fallback to text logo
    context.fillStyle = brandColors.white;
    context.font = 'bold 36px "Inter", "Arial", sans-serif';
    context.textAlign = 'left';
    context.fillText('AEM', 60, 90);
  }
};

// Save the image
const saveImage = async () => {
  await addLogo();
  
  // Add a subtle border
  context.strokeStyle = brandColors.white + '30';
  context.lineWidth = 5;
  context.strokeRect(0, 0, width, height);
  
  // Save the final image
  const buffer = canvas.toBuffer('image/png');
  const outputPath = join(__dirname, '../client/public/og-image.png');
  writeFileSync(outputPath, buffer);
  
  console.log(`Open Graph image generated at: ${outputPath}`);
};

saveImage().catch(console.error);
