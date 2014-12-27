/**
 * Watch File
 * @author Stewan P.
 */
'use strict';

var gulp = require('gulp');

gulp.task('watch', ['build:serve'], function() {
    gulp.watch('src/**/*', ['build:serve']);
    //gulp.watch('src/stpa-modal.js', ['stpa-modal']);
    //gulp.watch('src/doc/_partials/**/*.md', ['markdown']);
    //gulp.watch('src/doc/css/**/*.css', ['css']);
    //gulp.watch('src/doc/index.html', ['include']);
    //gulp.watch('bower.json', ['wiredep']);
});