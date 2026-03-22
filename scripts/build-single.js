// scripts/build-single.js
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const htmlPath = path.join(buildDir, 'index.html');

// 读取 HTML
let html = fs.readFileSync(htmlPath, 'utf8');

// 内联 JS
const jsMatch = html.match(/<script defer="defer" src="([^"]+)"><\/script>/);
if (jsMatch) {
  const jsPath = path.join(buildDir, jsMatch[1]);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    html = html.replace(jsMatch[0], `<script>${jsContent}</script>`);
    console.log('✅ JS 已内联');
  }
}

// 内联 CSS
const cssMatch = html.match(/<link href="([^"]+)" rel="stylesheet">/);
if (cssMatch) {
  const cssPath = path.join(buildDir, cssMatch[1]);
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    html = html.replace(cssMatch[0], `<style>${cssContent}</style>`);
    console.log('✅ CSS 已内联');
  }
}

// 写回文件
fs.writeFileSync(htmlPath, html);
console.log('✅ 单文件构建完成！');