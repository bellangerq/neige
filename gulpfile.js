'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const zip = require('gulp-zip');

gulp.task('sass', () =>
  gulp
    .src('assets/css/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
);

gulp.task('compress', () =>
	gulp
    .src([
      './**',
      '!*.zip',
      '!./{node_modules,node_modules/**}'
    ])
		.pipe(zip('neige.zip'))
		.pipe(gulp.dest(''))
);

gulp.task('build', ['sass', 'compress'], () =>
  gulp
);
