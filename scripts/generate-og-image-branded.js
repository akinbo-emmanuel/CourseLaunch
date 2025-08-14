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

// Academic Blue brand colors from CSS variables
const brandColors = {
  blue50: '#f0f7ff',   // Lightest blue
  blue100: '#e0f2fe',  // Lighter blue
  blue200: '#bae6fd',  // Light blue
  blue300: '#7dd3fc',  // Medium light blue
  blue400: '#38bdf8',  // Primary blue
  blue500: '#0ea5e9',  // Primary blue
  blue600: '#0284c7',  // Dark blue
  blue700: '#0369a1',  // Darker blue
  blue800: '#075985',  // Very dark blue
  blue900: '#0c4a6e',  // Darkest blue
  white: '#ffffff',
  black: '#111827',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray700: '#374151',
  gray900: '#111827'
};

// Background gradient with brand colors
const gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, brandColors.blue600);  // Dark blue
gradient.addColorStop(0.5, brandColors.blue500); // Primary blue
gradient.addColorStop(1, brandColors.blue700);  // Darker blue
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// Add subtle pattern
context.fillStyle = brandColors.white + '10';
for (let i = 0; i < 50; i++) {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const radius = Math.random() * 5 + 2;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

// Add text
context.fillStyle = brandColors.white;
context.textAlign = 'center';

// Add text shadow for better readability
context.shadowColor = brandColors.blue900 + '80';
context.shadowBlur = 10;
context.shadowOffsetX = 2;
context.shadowOffsetY = 2;

// Main title
context.font = 'bold 80px "Inter", "Arial", sans-serif';
context.fillText('ACADEMIC EXCELLENCE', width / 2, 300);

// Subtitle with different weight
context.font = '600 48px "Inter", "Arial", sans-serif';
context.fillText('Masterclass', width / 2, 380);

// Reset shadow
context.shadowColor = 'transparent';

// Add call-to-action text at the bottom
context.fillStyle = brandColors.blue100 + 'cc';
context.font = '28px "Inter", "Arial", sans-serif';
context.fillText('Unlock Your Academic Potential', width / 2, 520);

// Add logo
const addLogo = async () => {
  try {
    // Load the logo we generated earlier
    const logoPath = join(__dirname, '../client/public/logo.png');
    const logo = await loadImage(logoPath);
    
    // Calculate logo dimensions (maintaining aspect ratio)
    const logoAspectRatio = logo.width / logo.height;
    const logoWidth = 180;
    const logoHeight = logoWidth / logoAspectRatio;
    
    // Draw a subtle background for the logo
    context.fillStyle = brandColors.white + '20';
    const padding = 20;
    context.beginPath();
    context.roundRect(
      50 - padding / 2, 
      50 - padding / 2, 
      logoWidth + padding, 
      logoHeight + padding, 
      16
    );
    context.fill();
    
    // Draw the logo
    context.drawImage(logo, 50, 50, logoWidth, logoHeight);
    
  } catch (error) {
    console.error('Error loading logo:', error);
    // Fallback to text logo if image loading fails
    context.fillStyle = brandColors.white;
    context.font = 'bold 48px "Inter", "Arial", sans-serif';
    context.textAlign = 'left';
    context.fillText('AEM', 60, 120);
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
