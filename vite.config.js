import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remplacer 'NOM_DU_REPO' par le nom exact de votre dépôt GitHub entre les slashs
  // Exemple: base: '/site-akuno/',
  base: '/', 
})
