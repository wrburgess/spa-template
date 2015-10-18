# Single Page App Template

* Setup Sublime Text 3
* Setup Linting
* Setup Gulp
* Setup Webpack
* Setup Sass
* Setup Mocha
* Setup Babel
* Setup React
* Setup Flux
* Setup Deployment to AWS

## Setup Node

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
