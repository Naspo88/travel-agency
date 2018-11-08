const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nest = require('postcss-nested');
const cssimport = require('postcss-import');
const browserSync = require('browser-sync').create();

gulp.task('default', function () {
    gulp.start('watch');
});

gulp.task('html', function () {
    console.log('html');
});

gulp.task('css', function () {
    return gulp.src('./app/assets/css/style.css')
        .pipe(postcss([cssimport, cssvars, nest, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));
});

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
