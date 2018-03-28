# Shivens-react-script
To use create-react-app using this script:
```bash
create-react-app [YourAppName] --scripts-version shivens-react-script
```
This is a package that contains custom scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app) on the "0.9.x" branch.<br>

Documentation for the official [Create React App](https://github.com/facebookincubator/create-react-app) can be found here:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.<br>

I made this script to shorten the amount of time needed to set up a development environment using CRA.

This script currently installs:

* [React](https://reactjs.org/)
* [SASS](https://sass-lang.com/)
* [Bootstrap(CSS Only)](https://getbootstrap.com)
* [Reactstrap](reactstrap.github.io)
* [npm-run-all](https://github.com/mysticatea/npm-run-all)

The following changes are made to the structure and components:

• Creates components, css, and scss folders
• Adds NavMenu and Body components
• Configures components so SASS and bootstrap work right after installation
• Adds hot reloading for SASS file changes

The following changes are made to "Script" inside package.json:
```json
"build-css": "node-sass-chokidar src/scss -o src/css",
"watch-css": "npm run build-css && node-sass-chokidar src/scss -o src/css --watch --recursive",
"start-js": "react-scripts start",
"start": "npm-run-all -p watch-css start-js",
"build-js": "react-scripts build",
"build": "npm-run-all build-css build-js",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject"
```

To use create-react-app using this script:
```bash
create-react-app [YourAppName] --scripts-version shivens-react-script
```