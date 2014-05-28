'use strict';

var modules = require('..');
var path = require('path');
var fs = require('fs');

module.exports = function(gulp, conf) {

  var opts = {
    anatomy: {
      lib: true,
      styles: true
    },
    input: path.join(conf.gwd, 'test', 'src'),
    output: path.join(conf.gwd, 'test', 'out'),
    verbose: true
  };

  gulp.task('modules', ['clean'], modules(gulp, opts));

  gulp.task('test', ['modules'], function() {
    var expected = [
      path.join(opts.output, 'lib', 'bar', 'aaa', 'index.js'),
      path.join(opts.output, 'lib', 'ccc', 'index.js'),
      path.join(opts.output, 'lib', 'foo', 'index.js'),
      path.join(opts.output, 'styles', 'bar', 'aaa', 'main.css')
    ];

    expected.forEach(function(expect) {
      if (!fs.existsSync(expect)) {
        gulp.fail = true;
      }
    });
  });
};
