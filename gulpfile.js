var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var minifyCss = require('gulp-minify-css');

var build_stylesheet_path = 'build/stylesheets/'
var sass_scss_path = 'src/stylesheets/scss/';
var sass_css_path = 'src/stylesheets/css/';
var sass_sassdocs_path = 'src/docs/sass/';

var sassOptions = { errLogToConsole: true, outputStyle: 'expanded' };
var sassdocOptions = { dest: sass_sassdocs_path };

gulp.task('default', ['sass', 'minify-css']);

gulp.task('sass', function() {
  return gulp
    .src(sass_scss_path + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sass_css_path))
    .pipe(sassdoc(sassdocOptions))
    .resume();
});

gulp.task('minify-css', function() {
  return gulp
    .src(sass_css_path + '*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(build_stylesheet_path));
});
