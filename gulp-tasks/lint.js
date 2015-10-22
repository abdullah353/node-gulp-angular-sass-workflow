module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('./app/scripts/*.js')
    .pipe(plugins.jshint())
    // You can look into pretty reporters as well, but that's another story
    .pipe(plugins.jshint.reporter('default'));
  };
};