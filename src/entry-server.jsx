import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';

// SSR 渲染函数 - 必须使用 StaticRouter 包裹
export function render(urlPath) {
  // 将 / 路径转换为 HashRouter 格式
  const hashPath = urlPath === '/' ? '/' : `#${urlPath}`;
  
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={urlPath}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}