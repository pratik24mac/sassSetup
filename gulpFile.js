var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass');
    
gulp.task('styles', function() {
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});
gulp.task('livereload', function() {
    livereload.listen();
    livereload({
        start: true
    });
});
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            port: 8000,
            open: true
        }));
});
gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['styles','livereload']);
    gulp.watch(['css/*.css','./*.html'], ['livereload']);
})
gulp.task('default', ['webserver', 'watch']);