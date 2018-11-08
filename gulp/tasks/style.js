const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssvars = require('postcss-simple-vars');
const nest = require('postcss-nested');
const cssimport = require('postcss-import');
const mixins = require('postcss-mixins');

gulp.task('css', function () {
    return gulp.src('./app/assets/css/style.css')
        .pipe(postcss([cssimport, mixins, cssvars, nest, autoprefixer]))
        .on('error', function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/css'));
});
