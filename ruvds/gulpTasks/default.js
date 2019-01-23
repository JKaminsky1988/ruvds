var gulp   = require('gulp'),
    runSeq = require('run-sequence');

gulp.task('default', gulp.series('watch'));