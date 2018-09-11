# AppAuth-JS + Electron

![AppAuth-JS + Electron](https://rawgit.com/googlesamples/appauth-js-electron-sample/master/logo.svg)

This is an Electron Application, which uses the [AppAuth-JS](https://github.com/openid/AppAuth-JS) library.

Please note that this is not an official Google product.

## Development

This application has been written with [TypeScript](https://typescriptlang.org).

### Setup

* Install the latest version of [Node](https://nodejs.org/en/).
  [NVM](https://github.com/creationix/nvm)
  (Node Version Manager is highly recommended).

* Use `nvm install` to install the recommended Node.js version.

* Download the latest version of Visual Studio Code from
  [here](https://code.visualstudio.com/).

* Install [Yarn](https://yarnpkg.com/en/docs/install) package manager.

### Provision Dependencies

* `yarn install` or `npm install` to provision all the package depencies (from the folder that contains `package.json`).

Thats it! You are now ready to start.

### Development Workflow

This project has a few scripts to help you with your development workflow.

* `yarn run dev` or `npm run-script dev` will run the Electron application. This will also start the Typescript compiler in `watch` mode, and will automatically recompile your application as you start to make changes. Just reload the electron application to see your changes.

* `yarn start` or `npm start` is to start the Electron application (without setting up watches that monitor for changes).

# Electron Authentication with AppAuth-JS + PKCE
 
This example app shows how to build an Electron app and authentication with AppAuth-JS and PKCE (Proof Key for Code Exchange).

This app was built by forking [appauth-js-electron-sample](https://github.com/googlesamples/appauth-js-electron-sample), adding PKCE support, and validating that it works with Okta. I leveraged [these PKCE code samples](https://github.com/openid/AppAuth-JS/issues/28).

<!-- Please read [Build a Java EE REST API; Secure it with JWT and OIDC]() to see how this app was created. -->

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

This project has a few scripts to help you with your development workflow.

* `npm run dev` will run the Electron application. This will also start the Typescript compiler in `watch` mode, and will automatically recompile your application as you start to make changes. Just reload the Electron application to see your changes.
* `npm start` is to start the Electron application (without setting up watches that monitor for changes).

### Packaging for Production

To package your app for production, [electron-builder](https://www.electron.build/) is integrated. 

* `npm run pack` will generate the package directory without really packaging it. This is useful for testing purposes.
* `npm run dist` will package in a distributable format (e.g. dmg, windows installer, deb package).

If the app doesn't start after packaging, it's likely because you don't have [code signing](https://www.electron.build/code-signing) configured. To disable Code Signing when building for macOS, run `export CSC_IDENTITY_AUTO_DISCOVERY=false`. If you have an Apple Developer Account, open Xcode, go to **Preferences** > **Accounts** and make sure you're logged in and your development certificates are downloaded.

### Create a New OIDC App in Okta

You will need to create an OIDC Application in Okta to get your settings to perform authentication. 

1. Log in to your developer account on [developer.okta.com](https://developer.okta.com).
2. Navigate to **Applications** and click on **Add Application**.
3. Select **Native** and click **Next**. 
4. Give the application a name (e.g., `My Electron App`) and add `http://localhost:8000` as a Login redirect URI.
5. For Grant type allowed, select **Refresh Token** in addition to **Authorization Code**.
6. Click **Done**.

## Links

This example uses the following open source libraries:

* [Electron](https://electronjs.org/)
* [AppAuth-JS](https://github.com/openid/AppAuth-JS)

## Help

Please post any questions as comments on the [blog post](), or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if you'd like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).