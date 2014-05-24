'use strict';

var glob = require('glob');
var path = require('path');
var rindModules = require('rind-modules');

module.exports = function i18n(gulp, conf, cb){
  conf = conf || {};

  return function(cb){

    rindModules(conf);

    // get any rind modules in node_modules
    var nmPath = path.join(conf.gwd, 'node_modules');
    var mods = glob.sync('*.rind', {cwd:nmPath});
    mods.forEach(function(mod){
      rindModules({
        input: path.join(nmPath, mod),
        output: conf.gwd,
        anatomy: anatomy,
        rm: true,
        verbose: false
      });
    });
    cb();

  };
};
