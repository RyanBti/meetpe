import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore les erreurs spécifiques liées à la résolution
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning); // Log les autres avertissements
      },
    },
  },
});
