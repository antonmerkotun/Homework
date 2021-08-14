'use strict'

global.$ = {
    gulp: require('gulp'),
    clean: require('gulp-clean'),
    sass: require('gulp-sass')(require('sass')),
    autoprefixer: require('gulp-autoprefixer'),
    cleanCss: require('gulp-clean-css'),
    concat: require('gulp-concat'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};
$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
})

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('build', 'watch')
))