'use strict';

var glob = require('glob');
var path = require('path');
var rindModules = require('rind-modules');

module.exports = function i18n(gulp, conf){
  conf = conf || {};

  return function(cb){
    cb = cb || function(){};
    rindModules(conf);
    // get any rind modules in node_modules
    var nmPath = path.join(conf.input, 'node_modules');
    var mods = glob.sync('*.rind', {cwd:nmPath});
    mods.forEach(function(mod){
      conf.input = path.join(nmPath, mod);
      rindModules(conf);
    });
    cb();
  };
};
