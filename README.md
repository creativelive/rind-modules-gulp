# rind-i18n-gulp [![](https://travis-ci.org/creativelive/rind-i18n-gulp.png)](https://travis-ci.org/creativelive/rind-i18n-gulp)

## usage

```
'use strict';

var gulp = require('gulp');
var i18n = require('rind-i18n-gulp');

var opts = {
  sets: {
    'foo.js': ['foo/main.json']
  },
  locales: [ 'en-US', 'fr-fr' ],
  output: 'path/to/lang/files',
  input: 'output/directory'
};

gulp.task('i18n', function() {
  i18n(gulp, gwd, opts)();
});

```
