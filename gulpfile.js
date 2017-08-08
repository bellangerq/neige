'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const imageOptim = require('gulp-imageoptim');
const zip = require('gulp-zip');

gulp.task('sass', () =>
  gulp
    .src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
);

gulp.task('minify', ['sass'], () =>
  gulp
    .src('assets/css/style.css')
    .pipe(cssnano())
    .pipe(gulp.dest('assets/css/'))
);

// gulp.task('images', () =>
//   gulp
//     .src('src/img/**/*')
//     .pipe(imageOptim.optimize())
//     .pipe(gulp.dest('assets/img'))
// );

gulp.task('build', ['minify'], () =>
	gulp
    .src([
      './{assets,assets/**}',
      './{partials,partials/**}',
      '*.hbs',
      'package.json'
    ])
		.pipe(zip('neige.zip'))
		.pipe(gulp.dest(''))
);
