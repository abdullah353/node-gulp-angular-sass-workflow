module.exports = function(gulp, plugins){
  return function() {
    var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

    // Set up an express server (not starting it yet)
    var server = express();
    // Add live reload
    server.use(livereload({port: livereloadport}));
    // Use our 'public' folder as rootfolder
    server.use(express.static('./public'));
    // Because I like HTML5 pushstate .. this redirects everything back to our index.html
    server.all('/*', function(req, res) {
      res.sendfile('index.html', { root: 'public' });
    });

    // Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);
  };
};
