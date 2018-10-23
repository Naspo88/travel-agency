const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('yay');
});

gulp.task('html', function () {
    console.log('html');
});

gulp.task('css', function () {
    console.log('css');
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    watch('./app/assets/**/*.css', function () {
        gulp.start('css');
    });
});
