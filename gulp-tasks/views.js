module.exports = function(gulp, plugins) {
  return function() {
    // Get our index.html
    gulp.src('app/index.html')
    // And put it in the public folder
    .pipe(gulp.dest('public/'));

    // Any other view files from app/views
    gulp.src('app/views/**/*')
    // Will be put in the public/views folder
    .pipe(gulp.dest('public/views/'));
  };
};
