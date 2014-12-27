/**
 * Wiredep File
 * @author Stewan P.
 */
'use strict';

var gulp = require('gulp');
var markdown = require('gulp-markdown');

// inject bower components
gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream;

    return gulp.src('src/doc/index.html')
        .pipe(wiredep({
            directory: 'bower_components',
            devDependencies: true
        }))
        .pipe(gulp.dest('src/doc'));
});