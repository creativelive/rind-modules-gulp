# rind-modules-gulp [![](https://travis-ci.org/creativelive/rind-modules-gulp.png)](https://travis-ci.org/creativelive/rind-modules-gulp)

Gulp task to create [rind modules](https://github.com/creativelive/rind-modules) symlink tree

## usage

```
'use strict';

var gulp = require('gulp');
var modules = require('rind-modules-gulp');

var opts = {
  anatomy: {
    // rind modules anatomy object
    lib: true,
    styles: true
  },
  input: 'path/to/input/dir',
  output: 'path/to/output/dir',
  verbose: true
};

gulp.task('modules', modules(gulp, opts));

```
