import { spawn } from 'child_process';

// Just run the vite preview command
const port = process.env.PORT || 4173;
console.log(`Starting server on port ${port}`);

const vite = spawn('npx', ['vite', 'preview', '--host', '0.0.0.0', '--port', port], {
  stdio: 'inherit',
  env: { ...process.env, PORT: port }
});

vite.on('error', (err) => {
  console.error('Failed to start vite:', err);
  process.exit(1);
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
  process.exit(code);
});