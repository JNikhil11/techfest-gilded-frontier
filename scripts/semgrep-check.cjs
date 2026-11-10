const fs = require('fs');
const path = require('path');

const FORBIDDEN_IMPORTS = ['three', '@react-three/fiber', '@react-three/drei', 'ogl', 'playcanvas', 'babylonjs'];
const FORBIDDEN_EXTENSIONS = ['.glb', '.gltf', '.obj', '.fbx', '.stl', '.usdz'];
const FORBIDDEN_COPY_REGEX = /\b(SYS\.ACTIVE|SYSTEM ONLINE|SIGNAL \d+%|0[1-9]\s*\/\/\s*[A-Z]{3,}|INITIALIZING|COORDINATES|HUD_)\b/i;
const DEAD_ANCHOR_REGEX = /href\s*=\s*["'](#|javascript:void\(0\))["']/i;

let hasErrors = false;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        scanDir(fullPath);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (FORBIDDEN_EXTENSIONS.includes(ext)) {
        console.error(`[SEMGREP ERROR] Forbidden 3D file found: ${fullPath}`);
        hasErrors = true;
      }
      if (['.ts', '.tsx', '.js', '.jsx', '.html', '.css'].includes(ext)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const imp of FORBIDDEN_IMPORTS) {
          if (content.includes(`from "${imp}"`) || content.includes(`from '${imp}'`)) {
            console.error(`[SEMGREP ERROR] Forbidden import "${imp}" in ${fullPath}`);
            hasErrors = true;
          }
        }
        if (FORBIDDEN_COPY_REGEX.test(content)) {
          console.error(`[SEMGREP ERROR] Forbidden pseudo-technical copy matched in ${fullPath}`);
          hasErrors = true;
        }
        if (DEAD_ANCHOR_REGEX.test(content)) {
          console.error(`[SEMGREP ERROR] Dead anchor link found in ${fullPath}`);
          hasErrors = true;
        }
      }
    }
  }
}

console.log('Running static analysis & blacklist verification on src/ and public/...');
scanDir(path.resolve(__dirname, '../src'));
scanDir(path.resolve(__dirname, '../public'));

if (hasErrors) {
  console.error('\nStatic analysis check FAILED. Prohibited patterns detected.');
  process.exit(1);
} else {
  console.log('\nStatic analysis check PASSED: Zero forbidden 3D imports, zero pseudo-technical clutter, zero dead anchor links.');
  process.exit(0);
}
