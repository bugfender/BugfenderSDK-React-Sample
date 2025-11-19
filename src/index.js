import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
  appKey: '<YOUR_APP_KEY_HERE>',
  version: '0.1',
  build: '20200526',
  deviceName: 'Bugfender React Example',
});
Bugfender.log("React App Ready");

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
