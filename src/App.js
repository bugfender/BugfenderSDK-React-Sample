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

  function onForceSend () {
    Bugfender.forceSendOnce();
    Bugfender.log('Manual upload triggered');
  }

  async function onGetFeedback () {
    const result = await Bugfender.getUserFeedback();

    if (result.isSent) {
        // Sent!
    } else {
        // User cancelled feedback
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-hero">
          <img src={logo} className="App-logo" alt="Bugfender icon" />
          <div>
            <h1>BugfenderSDK React Sample</h1>
            <p className="App-tagline">
              Wire Bugfender into your UI, capture user feedback, and inspect logs instantly.
            </p>
          </div>
        </div>
        <div className="App-card">
          <div className="App-form">
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
            <input placeholder="Sensitive (ignored)" data-bf-ignore-keypress />
          </div>
          <div className="App-actions">
            <button className="primary" onClick={onButtonClick}>
              Send Test Log
            </button>
            <button className="secondary" onClick={onGetFeedback}>
              Get Feedback
            </button>
            <button className="secondary ghost" onClick={onForceSend}>
              Force Upload
            </button>
          </div>
        </div>
        <a className="App-link" href="https://bugfender.com" target="_blank" rel="noopener noreferrer">
          Learn About Bugfender
        </a>
      </header>
    </div>
  );
}

export default App;
