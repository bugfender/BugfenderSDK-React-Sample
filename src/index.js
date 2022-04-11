import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
