# Bugfender

Bugfender is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK React Sample

This repository contains a sample React application with Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **vanilla Javascript app**, visit https://github.com/bugfender/BugfenderSDK-JS-Sample

### Running the app

To check the app in your local machine, first you need to edit the code on `src/index.js` and change the `<YOUR_APP_KEY_HERE>` for you Bugfender App Key. Then you can run the app using:

- Ensure Node.js 12 is installed on your system.
- `npm ci`
- `npm start`

_You can get an app key at [bugfender.com](https://bugfender.com/)_

## Bugfender SDK React Documentation

### SDK Installation

Here are the main points to getting Bugfender working on your apps:

- Get an app key at [bugfender.com](https://bugfender.com/)
- `npm i @bugfender/sdk`. Install SDK npm package.
- Init Bugfender SDK in your `index.js` file before calling `ReactDOM.render()`:

```typescript
Bugfender.init({
    appKey: '<YOUR_APP_KEY_HERE>',
    // apiURL: 'https://api.bugfender.com',
    // baseURL: 'https://dashboard.bugfender.com',
    // overrideConsoleMethods: true,
    // printToConsole: true,
    // registerErrorHandler: true,
    // version: '',
    // build: '',
});
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app.

### Using Bugfender

After you have initialized the SDK, you can start using it anywhere by just importing the `Bugfender` object:

```typescript
import { Bugfender } from '@bugfender/sdk';

functions class App {
    useEffect(() => {
        Bugfender.log('App Created');
    })
}
```

## More information

### Docs

For more information on all methods available, please go to the [Bugfender JS SDK reference documentation](https://js.bugfender.com/).

### SDK status

The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com) .
