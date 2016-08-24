# Smart Dispensing System Vending Application

The Smart Dispensing System Vending Application allows the user to
enter a code which is used to dispense items from the vending machine.

## Usage

### Local Development
We use `webpack-dev-server` to compile the web app components into a bundle
which is then wrapped by `electron-prebuilt` to start the application. During
development, updates are applied through a Hot Module Reload mechanism. For
this to work, spawn two terminals. One for the `webpack-dev-server`, another
for the `electron-prebuilt` wrapper.

```sh
npm install
npm run setup
npm run build:dev
(cd dist/ && npm install --unsafe-perm)
npm run start:dev
```

### Production
Production builds use `webpack` to bundle the web app components into a bundle
which is then packed into an `Electron` executable for deployment. It uses the
`NODE_ENV` environment variable to compile for a tier (`dev`, `production`).

```sh
npm install
npm run setup
npm run lint
NODE_ENV=production npm run build
(cd dist/ && npm install --unsafe-perm)
npm run package
```

#### Other Options
This builds a `dev` version and packages it for `osx`/`darwin`.

```sh
npm install
npm run setup
NODE_ENV=dev npm run build
(cd dist/ && npm install --unsafe-perm)
npm run package:osx
```

### Docker
The included `Dockerfile` creates the environment needed to compile and package
the application. We use it for our `CI` environment, however, you can use it
locally as well.

#### Build Docker Image
```sh
docker build -t prototype-vending .
```

#### Build Application
```sh
docker run -v $PWD:/root/app -e NODE_ENV=production prototype-vending
```

## Requirements
- [Node.js](https://nodejs.org/en/) 6+

## References
- [webpack](https://webpack.github.io/)
- [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
- [Electron](http://electron.atom.io/)
- [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt)
- [Docker](https://docs.docker.com/)
