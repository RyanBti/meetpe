import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Utilisé pour gérer les chemins relatifs dans un déploiement
  resolve: {
    alias: {
      '@': '/src', // Définit un alias pour simplifier les chemins d'import
    },
  },
  build: {
    rollupOptions: {
      input: './index.html', // Définit le point d'entrée pour le build
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', // Structure des fichiers générés
      },
    },
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur en mode dev
    port: 3000, // Définit le port local (modifiable si déjà utilisé)
  },
});
