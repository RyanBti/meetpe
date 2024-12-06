import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './', // Utilise des chemins relatifs pour fonctionner dans des sous-dossiers
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Simplifie les imports depuis 'src'
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Ajoute un hash pour invalider le cache des fichiers
      },
    },
  },
  server: {
    port: 3000, // Définit le port pour le développement
    open: true, // Ouvre automatiquement le navigateur
  },
});
