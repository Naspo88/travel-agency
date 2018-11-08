const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nest = require('postcss-nested');
const cssimport = require('postcss-import');

gulp.task('css', function () {
    return gulp.src('./app/assets/css/style.css')
        .pipe(postcss([cssimport, cssvars, nest, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));
});
