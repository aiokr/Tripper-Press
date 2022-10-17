cp -r themes/hexo-theme-type/README.md source/type-README.md
npm run clean
npm run generate
npx tailwindcss -o themes/hexo-theme-type/source/css/tailwind.css
cp -r assets/manifest.json public/manifest.json