# Single Page App Template

* Setup Linting
* Setup Gulp
* Setup Webpack
* Setup Sass
* Setup Mocha
* Setup Babel
* Setup React
* Setup Flux
* Setup Deployment to AWS

## Setup node

* Clean out the npm cache `sudo npm cache clean -f`
* Install the latest node `sudo npm install -g n`
* Set to latest stable version `sudo n stable`
* Check node version `node -v`
* ref: [http://davidwalsh.name/upgrade-nodejs](http://davidwalsh.name/upgrade-nodejs)

## Setup npm

* Install the latest npm `sudo npm install npm -g`
 Check the npm version `npm -v`

## Install npm modules

* Create a `package.json` file in root

```
{
  "name": "spa-template",
  "version": "1.0.0",
  "description": "Template for a React-based Single Page App",
  "author": "Randy Burgess <wrburgess@gmail.com>",
  "scripts": {
    "npmv": "npm -v",
    "nodev": "node -v"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/wrburgess/spa-template/issues"
  },
  "bugs": {
    "url": "https://github.com/wrburgess/spa-template/issues"
  },
  "keywords": [
    "react",
    "single page app"
  ],
  "dependencies": {
  },
  "devDependencies": {
  },
  "license": "MIT"
}
```

* Install an npm module `npm install lodash --save`

## Setup SublimeText 3

* Install the Babel package:
  - [https://packagecontrol.io/packages/Babel](https://packagecontrol.io/packages/Babel)
  - Open a `js` file with that extension
  - Select View from the menu
  - Then `Syntax -> Open all with current extension as...` -> `Babel` -> `JavaScript (Babel)`
  - Repeat this for each extension (e.g.: .js and .jsx)

* Install Babel-Snippets
  - [https://packagecontrol.io/packages/Babel%20Snippets](https://packagecontrol.io/packages/Babel%20Snippets)

* Enable Emmet in JSX files with Sublime React plugin
  - [https://gist.github.com/wrburgess/5b6d75c2bd13c36a28b4](https://gist.github.com/wrburgess/5b6d75c2bd13c36a28b4)
