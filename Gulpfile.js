'use strict';

var gulp = require('gulp'),
  refresh = require('gulp-livereload'),
  plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

// Dev task
gulp.task('dev', ['views', 'styles', 'lint', 'browserify'], function() { });
// JSHint task
gulp.task('lint', getTask('lint'));
// Styles task
gulp.task('styles', getTask('styles'));
// Browserify task
gulp.task('browserify', getTask('browserify'));
// Views task
gulp.task('views', getTask('views'));
//Starting Server
gulp.task('server', getTask('server'));


gulp.task('watch', ['lint','server'], function() {

  // Watch our scripts, and when they change run lint and browserify
  gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],[
    'lint',
    'browserify'
  ]);

  // Watch our sass files
  gulp.watch(['app/styles/**/*.scss'], [
    'styles'
  ]);

  gulp.watch(['app/**/*.html'], [
    'views'
  ]);

  gulp.watch('./public/**').on('change', refresh.changed);

});

gulp.task('default', ['dev', 'watch']);
