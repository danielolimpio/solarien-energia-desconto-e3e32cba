import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import vitePrerender from "vite-plugin-prerender";

// All routes for prerendering
const staticRoutes = [
  "/",
  "/sitemap",
  "/politica-de-privacidade",
  "/termos-de-uso",
  "/politica-de-cookies",
];

// State slugs
const stateRoutes = [
  "/mercado-livre-de-energia-no-acre",
  "/mercado-livre-de-energia-em-alagoas",
  "/mercado-livre-de-energia-no-amapa",
  "/mercado-livre-de-energia-no-amazonas",
  "/mercado-livre-de-energia-na-bahia",
  "/mercado-livre-de-energia-no-ceara",
  "/mercado-livre-de-energia-no-distrito-federal",
  "/mercado-livre-de-energia-no-espirito-santo",
  "/mercado-livre-de-energia-em-goias",
  "/mercado-livre-de-energia-no-maranhao",
  "/mercado-livre-de-energia-no-mato-grosso",
  "/mercado-livre-de-energia-no-mato-grosso-do-sul",
  "/mercado-livre-de-energia-em-minas-gerais",
  "/mercado-livre-de-energia-no-para",
  "/mercado-livre-de-energia-na-paraiba",
  "/mercado-livre-de-energia-no-parana",
  "/mercado-livre-de-energia-em-pernambuco",
  "/mercado-livre-de-energia-no-piaui",
  "/mercado-livre-de-energia-no-rio-de-janeiro",
  "/mercado-livre-de-energia-no-rio-grande-do-norte",
  "/mercado-livre-de-energia-no-rio-grande-do-sul",
  "/mercado-livre-de-energia-em-rondonia",
  "/mercado-livre-de-energia-em-roraima",
  "/mercado-livre-de-energia-em-santa-catarina",
  "/mercado-livre-de-energia-em-sao-paulo",
  "/mercado-livre-de-energia-em-sergipe",
  "/mercado-livre-de-energia-no-tocantins",
];

// Capital city slugs (27 capitals)
const capitalRoutes = [
  "/mercado-livre-de-energia-em-rio-branco-ac",
  "/mercado-livre-de-energia-em-maceio-al",
  "/mercado-livre-de-energia-em-macapa-ap",
  "/mercado-livre-de-energia-em-manaus-am",
  "/mercado-livre-de-energia-em-salvador-ba",
  "/mercado-livre-de-energia-em-fortaleza-ce",
  "/mercado-livre-de-energia-em-brasilia-df",
  "/mercado-livre-de-energia-em-vitoria-es",
  "/mercado-livre-de-energia-em-goiania-go",
  "/mercado-livre-de-energia-em-sao-luis-ma",
  "/mercado-livre-de-energia-em-cuiaba-mt",
  "/mercado-livre-de-energia-em-campo-grande-ms",
  "/mercado-livre-de-energia-em-belo-horizonte-mg",
  "/mercado-livre-de-energia-em-belem-pa",
  "/mercado-livre-de-energia-em-joao-pessoa-pb",
  "/mercado-livre-de-energia-em-curitiba-pr",
  "/mercado-livre-de-energia-em-recife-pe",
  "/mercado-livre-de-energia-em-teresina-pi",
  "/mercado-livre-de-energia-no-rio-de-janeiro-rj",
  "/mercado-livre-de-energia-em-natal-rn",
  "/mercado-livre-de-energia-em-porto-alegre-rs",
  "/mercado-livre-de-energia-em-porto-velho-ro",
  "/mercado-livre-de-energia-em-boa-vista-rr",
  "/mercado-livre-de-energia-em-florianopolis-sc",
  "/mercado-livre-de-energia-em-sao-paulo-sp",
  "/mercado-livre-de-energia-em-aracaju-se",
  "/mercado-livre-de-energia-em-palmas-to",
];

// Primary routes for initial prerender (states + capitals + static = ~59 pages)
const primaryRoutes = [...staticRoutes, ...stateRoutes, ...capitalRoutes];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "pwa-192x192.png", "pwa-512x512.png"],
      manifest: {
        name: "Mercado Livre de Energia",
        short_name: "MLE Energia",
        description: "Economize até 45% na sua conta de energia com o Mercado Livre de Energia. Energia limpa e renovável para todo Brasil.",
        theme_color: "#f59e0b",
        background_color: "#0c1117",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }),
    // Prerender for SEO - generates static HTML for each route
    mode === "production" && vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: primaryRoutes,
      postProcess(renderedRoute) {
        // Remove /index.html suffix - output as /route.html instead of /route/index.html
        if (renderedRoute.route !== "/") {
          renderedRoute.outputPath = path.join(
            __dirname,
            "dist",
            `${renderedRoute.route}.html`
          );
        }
        return renderedRoute;
      },
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true,
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
