cp -r themes/hexo-theme-type/README.md source/type-README.md
npm run tailwind
npm run clean
npm run generate
cp -r assets/manifest.json public/manifest.json