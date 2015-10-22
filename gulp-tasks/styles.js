module.exports = function(gulp, plugins) {
  return function() {
    gulp.src('app/styles/*.scss')
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(plugins.sass({onError: function(e) { console.log(e); } }))
    // Optionally add autoprefixer
    .pipe(plugins.autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    // These last two should look familiar now :)
    .pipe(gulp.dest('public/css/'));
  };
};