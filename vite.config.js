import { defineConfig } from "vite";
import { resolve } from "node:path";

/* Mehrseitiger Build: jede HTML-Datei ist ein eigener Einstiegspunkt.
   Der Worker (worker/index.ts) liefert daraus aus und entscheidet vorher,
   wer /private/ überhaupt sehen darf.

   Wichtig dabei: die gebündelten Dateien des privaten Layers müssen
   ebenfalls UNTER /private/ landen. Sonst schützt das Gate zwar
   /private/index.html, das dazugehörige Bundle läge aber unter /assets/
   offen im Netz — inklusive sämtlicher Lernkarten samt Lösungen. Deshalb
   bekommen genau die Chunks und Assets des Privat-Einstiegs ein eigenes
   Verzeichnis; gemeinsame Chunks bleiben öffentlich, weil der Public
   Layer sie sonst nicht laden könnte. */

const PRIVATE_ENTRY = "private";
const isPrivate = (name) => name === PRIVATE_ENTRY;

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        [PRIVATE_ENTRY]: resolve(__dirname, "private/index.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html"),
        imprint: resolve(__dirname, "imprint.html"),
        notfound: resolve(__dirname, "404.html"),
      },
      output: {
        entryFileNames: (chunk) =>
          isPrivate(chunk.name) ? "private/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
        chunkFileNames: (chunk) =>
          isPrivate(chunk.name) ? "private/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
        assetFileNames: (asset) => {
          const from = asset.originalFileNames || [];
          const fromPrivate =
            from.some((f) => f.startsWith("private/")) ||
            from.some((f) => f.includes("private-style.css"));
          return fromPrivate ? "private/assets/[name]-[hash][extname]" : "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
