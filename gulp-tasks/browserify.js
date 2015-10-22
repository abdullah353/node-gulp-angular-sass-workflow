module.exports = function(gulp, plugins) {
  return function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
    gulp.src(['app/scripts/main.js'])
    .pipe(plugins.browserify({
      insertGlobals: true,
      debug: false
    }))
    // Bundle to a single file
    .pipe(plugins.concat('bundle.js'))
    // Output it to our public folder
    .pipe(gulp.dest('public/js'));
  }
};