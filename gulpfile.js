const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nest = require('postcss-nested');

gulp.task('default', function () {
    gulp.start('watch');
});

gulp.task('html', function () {
    console.log('html');
});

gulp.task('css', function () {
    return gulp.src('./app/assets/css/**/*.css')
        .pipe(postcss([nest, cssvars, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    });

    watch('./app/assets/css/**/*.css', function () {
        gulp.start('css');
    });
});
