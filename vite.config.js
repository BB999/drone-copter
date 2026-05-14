import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import basicSsl from '@vitejs/plugin-basic-ssl';

// ドット始まりのファイルを docs/ にコピーするプラグイン
// - .well-known/assetlinks.json: TWA検証用
// - .nojekyll: GitHub Pages の Jekyll 処理を無効化して dotfile を配信可能にする
// Vite はデフォルトで public/ のドット始まりディレクトリを無視するため自前でコピー
function copyAssetLinks() {
  return {
    name: 'copy-assetlinks',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'docs');

      const assetLinksSrc = path.resolve(__dirname, 'public/.well-known/assetlinks.json');
      const assetLinksDestDir = path.join(outDir, '.well-known');
      const assetLinksDest = path.join(assetLinksDestDir, 'assetlinks.json');
      if (fs.existsSync(assetLinksSrc)) {
        fs.mkdirSync(assetLinksDestDir, { recursive: true });
        fs.copyFileSync(assetLinksSrc, assetLinksDest);
        console.log('assetlinks.json をコピー:', assetLinksDest);
      }

      const nojekyllSrc = path.resolve(__dirname, 'public/.nojekyll');
      const nojekyllDest = path.join(outDir, '.nojekyll');
      if (fs.existsSync(nojekyllSrc)) {
        fs.copyFileSync(nojekyllSrc, nojekyllDest);
        console.log('.nojekyll をコピー:', nojekyllDest);
      }
    }
  };
}

export default defineConfig({
  // GitHub Pages用: https://bb999.github.io/drone-copter/
  base: '/drone-copter/',
  // ビルド出力先をdocs/に変更（GitHub Pages用）
  build: {
    outDir: 'docs',
  },
  server: {
    https: true,
    host: '0.0.0.0'
  },
  plugins: [
    basicSsl(),
    copyAssetLinks(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['doron.glb', 'doron.blend', '*.mp3', 'icons/*.png'],
      manifest: {
        name: 'DROCON - MR Drone Simulator',
        short_name: 'DROCON',
        description: 'Mixed Reality Drone Simulator for Quest 3 / Quest Pro',
        start_url: '/drone-copter/',
        scope: '/drone-copter/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#00c8ff',
        orientation: 'any',
        icons: [
          {
            src: '/drone-copter/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/drone-copter/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/drone-copter/icons/icon-192-maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/drone-copter/icons/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,glb,mp3,png,jpg,svg,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024, // 15MB for large GLB files
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
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
    })
  ]
});
