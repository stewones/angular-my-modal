'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;
    var routes = null;
    console.log(typeof baseDir);

    if(baseDir === 'dist' || (util.isArray(baseDir) && baseDir.indexOf('dist') !== -1)) {    
        routes = {
            // Should be '/bower_components': '../bower_components'
            // Waiting for https://github.com/shakyShane/browser-sync/issues/308
            '/bower_components': 'bower_components'
        };
    }

    browserSync.instance = browserSync.init(files, {
        startPath: '/doc',
        server: {
            baseDir: baseDir,
            middleware: middleware,
            routes: routes
        },
        browser: browser
    });

}

gulp.task('serve', ['watch'], function() {
    browserSyncInit([
        'dist'
    ], [
        'dist/**/*',
    ]);
});

gulp.task('serve:dist', ['build:dist'], function() {
    browserSyncInit(
        'dist'
    );
});
