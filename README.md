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
* Troubleshooting: [Fixing npm On Mac OS X for Homebrew Users](Fixing npm On Mac OS X for Homebrew Users)
* Troubleshooting: [How do I completely uninstall Node.js, and reinstall from beginning (Mac OS X)](http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x)

## Setup npm

* Install the latest npm `sudo npm install npm -g`
 Check the npm version `npm -v`

## Install npm modules

* Create a `package.json` file in root (you can also use `npm init`)

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

## Setup gulp

* Install gulp locally: `npm install --save-dev gulp`
* Create gulpfile.js at root

```
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```

## Setup gulp for sass

* Reference: [A Simple Gulp’y Workflow For Sass](http://www.sitepoint.com/simple-gulpy-workflow-sass/)

### Install packages

* Install gulp-sass: `npm install gulp-sass --save-dev`
* Install gulp-sass: `npm install gulp-autoprefixer --save-dev`
* Install gulp-sass: `npm install gulp-sourcemaps --save-dev`
* Install sassdoc:   `npm install sassdoc --save-dev`

### Create variables

* Add to `gulpfile.js`:

```
var sass_scss_path = 'src/stylesheets/scss/*.scss';
var sass_css_path = 'src/stylesheets/css/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
```

### Add references to libraries

* Add to `gulpfile.js`:

```
var sass = require('gulp-sass');`
var sourcemaps = require('gulp-sourcemaps');`
var autoprefixer = require('gulp-autoprefixer');`
```

### Add sass task

* Add a new task to the `gulpfile.js`:

```
gulp.task('sass', function() {
  return gulp
    .src('src/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/styles/css/'));
});
```

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
    .pipe(sassdoc())
    .resume();
});
