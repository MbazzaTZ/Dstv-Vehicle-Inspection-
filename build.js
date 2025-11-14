// build.js
const fs = require('fs');
const path = require('path');

// Read the HTML file
let html = fs.readFileSync('index.html', 'utf8');

// Replace environment variables (for static deployment)
html = html.replace(
  "const SUPABASE_URL = 'https://your-project-url.supabase.co';",
  "const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project-url.supabase.co';"
);

html = html.replace(
  "const SUPABASE_ANON_KEY = 'your-anon-key';",
  "const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';"
);

// Write to public directory
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
fs.writeFileSync('public/index.html', html);

console.log('Build completed!');
