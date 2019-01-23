var gulp = require('gulp'),
    scss = require('gulp-sass'),
    minCss = require('gulp-cssmin'),
    rename = require("gulp-rename"),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(scss({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(concat('all.css'))
        .pipe(minCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css/'))
        .pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/scss/*.scss', gulp.series('css'));
});
