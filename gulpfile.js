const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// --------------------
// PUG → HTML
// --------------------
function pugTask() {
  return gulp.src('pug/pages/*.pug')       // исходные страницы
    .pipe(pug({ pretty: true }))           // pretty: true — форматированный HTML
    .pipe(gulp.dest('.'))                   // результат в корень
    .pipe(browserSync.stream());
}

// --------------------
// SCSS → CSS
// --------------------
function scssTask() {
  return gulp.src('scss/main.scss')         // главный SCSS-файл
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))                 // результат в css/
    .pipe(browserSync.stream());
}

// --------------------
// Watch + BrowserSync
// --------------------
function watchFiles() {
  browserSync.init({
    server: './'
  });

  gulp.watch('pug/**/*.pug', pugTask);
  gulp.watch('scss/**/*.scss', scssTask);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
}

exports.pug = pugTask;
exports.scss = scssTask;
exports.watch = watchFiles;
exports.default = gulp.series(gulp.parallel(pugTask, scssTask), watchFiles);
