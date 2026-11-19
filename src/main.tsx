import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

// Register PWA service worker with auto-refresh on update
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('FCRA Explorer: New version available');
  },
  onOfflineReady() {
    console.log('FCRA Explorer: Ready to work offline');
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
