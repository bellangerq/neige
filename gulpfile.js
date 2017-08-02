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

gulp.task('default', () =>
  gulp
    .watch('src/sass/*.scss', ['sass'])
);

gulp.task('build', () =>
	gulp
    .src([
      './**',
      '!*.zip',
      '!./{node_modules,node_modules/**}'
    ])
		.pipe(zip('neige.zip'))
		.pipe(gulp.dest(''))
);
