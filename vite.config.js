import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), react()],
    preview: {
        port: 6921,
        strictPort: true,
    },
    server: {
        port: 6921,
        strictPort: true,
        host: true,
        origin: "https://0.0.0.0:6921",
    },
});
