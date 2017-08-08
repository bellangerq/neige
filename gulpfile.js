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
      './**',
      '!*.zip',
      '!./{node_modules,node_modules/**}',
      '!./{src,src/**}',
      '!package-lock.json',
      '!*.js',
      '!*.md'
    ])
		.pipe(zip('neige.zip'))
		.pipe(gulp.dest(''))
);
