import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bugfender } from '@bugfender/sdk';

function App() {
  useEffect(() => {
    Bugfender.log("Homepage Load");
    Bugfender.setDeviceKey("custom_data_1", "value1");
  }, [])

  function onButtonClick () {
    Bugfender.sendLog({ tag: 'Interaction', text: 'Click Button' });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BugfenderSDK React Sample
        </p>
        <button onClick={onButtonClick}>
          CLICK ME!
        </button>
        <a className="App-link" href="https://bugfender.com" target="_blank" rel="noopener noreferrer">
          Learn About Bugfender
        </a>
      </header>
    </div>
  );
}

export default App;
