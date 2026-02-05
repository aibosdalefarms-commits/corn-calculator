#!/usr/bin/env node
/**
 * Simple icon generator for Corn Calculator PWA
 * Creates 192x192 and 512x512 PNG icons with corn emoji
 * 
 * Usage:
 *   node create-icons.js
 * 
 * Requirements:
 *   npm install canvas
 */

const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background - dark theme
  ctx.fillStyle = '#1a1c1e';
  ctx.fillRect(0, 0, size, size);

  // Circle background - gold
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.42;
  
  ctx.fillStyle = '#d4a832';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  // Text - corn emoji or CC
  ctx.fillStyle = '#1a1c1e';
  ctx.font = `bold ${size * 0.45}px -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Try to use corn emoji, fallback to "CC" text
  const text = '🌽';
  ctx.fillText(text, centerX, centerY);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`✓ Created ${filename} (${size}x${size})`);
}

// Generate both icon sizes
try {
  createIcon(192, 'icon-192.png');
  createIcon(512, 'icon-512.png');
  console.log('\n✅ Icons created successfully!');
  console.log('You can now deploy your PWA.\n');
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    console.error('❌ Error: canvas module not found');
    console.error('\nPlease install the canvas package:');
    console.error('  npm install canvas\n');
    console.error('Or create icons manually using an online tool:');
    console.error('  https://favicon.io/favicon-generator/\n');
  } else {
    console.error('❌ Error creating icons:', error.message);
  }
  process.exit(1);
}
