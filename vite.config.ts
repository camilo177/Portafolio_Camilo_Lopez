import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    // Configuración para manejar imágenes
  // Aquí puedes ajustar según las extensiones de tus imágenes
  // En este caso, se incluye la extensión .jpg
  assetsInclude: [/\.(png|jpe?g|gif|webp|svg|mp4)$/i],

})