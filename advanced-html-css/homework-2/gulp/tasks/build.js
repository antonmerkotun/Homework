module.exports = function () {
    $.gulp.task('build', function () {
        return $.gulp.src('./src/scss/**/*.scss')
            .pipe($.sass())
            .pipe($.autoprefixer('last 3 versions'))
            .pipe($.concat('style.css'))
            .pipe($.gulp.dest('./dist/style'))
    })
}

