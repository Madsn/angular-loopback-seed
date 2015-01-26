'use strict';

var gulp = require('gulp');

var rename = require('gulp-rename');

var loopbackAngular = require('gulp-loopback-sdk-angular');

gulp.task('loopback', function () {
  return gulp.src('../server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./src/components/services'));
});
