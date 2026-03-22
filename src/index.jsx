import React from 'react';
import { HashRouter } from 'react-router-dom';  // ✅ HashRouter 支持 GitHub Pages
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './fonts.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}