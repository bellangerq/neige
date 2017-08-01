'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const zip = require('gulp-zip');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('sass', function() {
  gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
  gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('compress', function () {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('assets/js')
    ]
  );
});

// gulp.task('build', () =>
// 	gulp.src('*', ['!node_modules'])
// 		.pipe(zip('archive.zip'))
// 		.pipe(gulp.dest('dist'))
// );
