var gulp = require('gulp'),
  scss = require('gulp-sass'),
  minCss = require('gulp-cssmin'),
  rename = require("gulp-rename"),
  livereload = require('gulp-livereload'),
  concat = require('gulp-concat');

gulp.task('css', function () {
  return gulp.src('src/scss/base.scss')
    .pipe(scss())
    .pipe(concat('all.css'))
    .pipe(minCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/css/'))
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**.scss', gulp.series('css'));
  livereload.listen();
});
