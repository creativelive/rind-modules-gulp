/*eslint no-eval:0 */

'use strict';

var rindModules = require('..');
var path = require('path');

module.exports = function(gulp, conf){

  var opts = {
    input: path.join(conf.gwd, 'test', 'src', 'modules'),
    output: path.join(conf.gwd, 'test', 'out'),
    verbose: true
  };

  return gulp.task('test', function(cb) {
    rindModules(gulp, opts);
  });

};
