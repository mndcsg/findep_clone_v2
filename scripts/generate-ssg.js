import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const routes = [
  '/',
  '/corporativa/historia',
  '/gobierno/equipo-directivo',
  '/corporativa/perfil',
  '/components',
  '/gobierno/consejo',
  '/gobierno/comites',
  '/accion/grafica-historica',
  '/accion/precios-historicos',
  '/accion/analistas',
  '/responsabilidad-social'
];

const templatePath = join(rootDir, 'dist', 'index.html');
const template = readFileSync(templatePath, 'utf-8');

const { render } = await import('../dist/server/entry-server.js');

console.log('🚀 开始生成静态页面...');

for (const route of routes) {
  try {
    const html = render(route);
    const outputDir = route === '/' 
      ? join(rootDir, 'dist') 
      : join(rootDir, 'dist', route);
    
    mkdirSync(outputDir, { recursive: true });

    // ✅ 只替换 root 内容，保留所有 script 标签
    const finalHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    // ✅ 验证 script 标签是否存在
    if (!finalHtml.includes('<script')) {
      console.warn(`⚠️  警告：${route} 的 HTML 中缺少 script 标签！`);
    }

    writeFileSync(join(outputDir, 'index.html'), finalHtml);
    console.log(`✅ 生成：${route}`);
  } catch (error) {
    console.error(`❌ 失败：${route}`, error.message);
  }
}

console.log('🎉 静态页面生成完成!');