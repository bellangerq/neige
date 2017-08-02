'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const zip = require('gulp-zip');
const imageOptim = require('gulp-imageoptim');
const cssnano = require('gulp-cssnano');

gulp.task('sass', () =>
  gulp
    .src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
);

gulp.task('minify', () =>
  gulp
    .src('assets/css/style.css')
    .pipe(cssnano())
    .pipe(gulp.dest('assets/css/'))
);

gulp.task('images', () =>
  gulp
    .src('src/img/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest('assets/img'))
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

gulp.task('build', ['sass', 'minify', 'images', 'compress'], () =>
  gulp
);
