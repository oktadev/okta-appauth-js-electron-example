# Electron Authentication with AppAuth-JS + PKCE
 
This example app shows how to build an Electron app and authentication with AppAuth-JS and PKCE (Proof Key for Code Exchange).

Please read [Build a Desktop App with Electron and Authentication](https://developer.okta.com/blog/2018/09/17/desktop-app-electron-authentication) to see how this app was created.

This app was built by forking [appauth-js-electron-sample](https://github.com/googlesamples/appauth-js-electron-sample), adding PKCE support, and validating that it works with Okta. I leveraged [these PKCE code samples](https://github.com/openid/AppAuth-JS/issues/28).

**Prerequisites:** [Node.js](https://nodejs.org/) and an [Okta Developer Account](https://developer.okta.com).

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-appauth-js-electron-example.git
cd okta-appauth-js-electron-example
```

This will get a copy of the project installed locally. To install all of its dependencies and start the app, run the following commands.
 
```bash
npm i
```

### Create a New OIDC App in Okta

You will need to create an OIDC Application in Okta to get your settings to perform authentication. 

1. Log in to your developer account on [developer.okta.com](https://developer.okta.com).
2. Navigate to **Applications** and click on **Add Application**.
3. Select **Native** and click **Next**. 
4. Give the application a name (e.g., `My Electron App`) and add `http://localhost:8000` as a Login redirect URI.
5. For Grant type allowed, select **Refresh Token** in addition to **Authorization Code**.
6. Click **Done**.

Modify `flow.ts` to use your Okta app's settings.

```ts
const openIdConnectUrl = 'https://{yourOktaDomain}/oauth2/default';
const clientId = '{yourClientId}';
```

Update `app.ts` to use your app's `/userinfo` endpoint.

```ts
let request =
    new Request('https://{yourOktaDomain}/oauth2/default/v1/userinfo', {
      headers: new Headers({'Authorization': `Bearer ${accessToken}`}),
      method: 'GET',
      cache: 'no-cache'
    });
```

Run `npm run dev` to launch the app.

This project has two scripts to help you with your development workflow.

* `npm run dev` will run the Electron application. This will also start the Typescript compiler in `watch` mode, and will automatically recompile your application as you start to make changes. Just reload the Electron application to see your changes.
* `npm start` is to start the Electron application (without setting up watches that monitor for changes).

### Packaging for Production

To package your app for production, [electron-builder](https://www.electron.build/) is integrated. 

* `npm run pack` will generate the package directory without really packaging it. This is useful for testing purposes.
* `npm run dist` will package in a distributable format (e.g. dmg, windows installer, deb package).

**NOTE:** If the app doesn't start after packaging, it's likely because you don't have [code signing](https://www.electron.build/code-signing) configured. To disable Code Signing when building for macOS, run `export CSC_IDENTITY_AUTO_DISCOVERY=false`. If you have an Apple Developer Account, open Xcode, go to **Preferences** > **Accounts** and make sure you're logged in and your development certificates are downloaded.

## Links

This example uses the following open source libraries:

* [Electron](https://electronjs.org/)
* [AppAuth-JS](https://github.com/openid/AppAuth-JS)

## Help

Please post any questions as comments on the [blog post](https://developer.okta.com/blog/2018/09/17/desktop-app-electron-authentication), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if you'd like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).
