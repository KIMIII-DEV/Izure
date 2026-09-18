import { defineConfig } from "vite";
import { resolve } from "node:path";

/* Zwei Einstiegspunkte, zwei Ausgabeorte.

   Entscheidend ist, dass die gebündelten Dateien des Private Layers unter
   /private/assets/ landen. Läge das Bundle im öffentlichen /assets/, wäre
   das Gate wirkungslos: der Worker schützt /private/**, und ein Bundle
   ausserhalb dieses Pfads ginge samt Lernkarten, Lösungen und Graph-Inhalt
   an jeden Besucher raus. Gemeinsame Chunks bleiben öffentlich, sonst
   könnte der Public Layer sie nicht laden. */

const PRIVATE_ENTRY = "private";
const isPrivate = (name) => name === PRIVATE_ENTRY;

export default defineConfig({
  build: {
    outDir: "dist",
    // Die Lieferung bringt Originalfotos mit; 4 kB Inline-Grenze würde nur
    // die kleinen SVGs erwischen und die HTML wieder aufblähen.
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        [PRIVATE_ENTRY]: resolve(__dirname, "private/index.html"),
        notfound: resolve(__dirname, "404.html"),
      },
      output: {
        entryFileNames: (chunk) =>
          isPrivate(chunk.name) ? "private/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
        chunkFileNames: (chunk) =>
          isPrivate(chunk.name) ? "private/assets/[name]-[hash].js" : "assets/[name]-[hash].js",
        assetFileNames: (asset) => {
          const from = asset.originalFileNames || [];
          const fromPrivate = from.some((f) => f.startsWith("private/"));
          return fromPrivate
            ? "private/assets/[name]-[hash][extname]"
            : "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
