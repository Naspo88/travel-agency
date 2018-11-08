const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/css/**/*.css', function () {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['css'], function () {
    return gulp.src('./app/temp/css/style.css')
        .pipe(browserSync.stream());    
});
