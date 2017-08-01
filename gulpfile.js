'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('assets/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
  gulp.watch('src/sass/*.scss', ['sass']);
});
