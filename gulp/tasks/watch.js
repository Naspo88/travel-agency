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

    watch('./app/assets/js/**/*.js', function () {
        gulp.start('jsInject');
    });
});

gulp.task('jsInject', ['scripts'], function () {
    browserSync.reload();    
});

gulp.task('cssInject', ['css'], function () {
    return gulp.src('./app/temp/css/style.css')
        .pipe(browserSync.stream());    
});
