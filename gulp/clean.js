'use strict';

var rimraf = require('rimraf');

module.exports = function(gulp){
  // clean the workspace
  gulp.task('clean', function (cb) {
    rimraf('test/out', cb);
  });
};
