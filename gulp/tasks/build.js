const gulp = require('gulp');
const imgemin = require('gulp-imagemin');
const del = require('del');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const nano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

gulp.task('preview', function () {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        notify: false
    });
});

gulp.task('deleteDist', () => {
    return del('./dist');
});

gulp.task('otherFiles', ['deleteDist'], () => {
    const pathToCopy = [
        './app/**/*',
        '!./app/**/index.html',
        '!./app/assets/images/**',
        '!./app/assets/css/**',
        '!./app/assets/js/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(pathToCopy)
        .pipe(gulp.dest('./dist'));
});

gulp.task('optimizeImg', ['deleteDist', 'icons'], () => {
    return gulp.src([
        './app/assets/images/**/*',
        '!./app/assets/images/icons',
        '!./app/assets/images/icons/**/*'
    ])
        .pipe(imgemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin', ['deleteDist', 'css', 'scripts'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [() => { return rev() }, () => { return nano() }],
            js: [() => { return rev() }, () => { return uglify() }]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['deleteDist', 'otherFiles', 'optimizeImg', 'usemin']);
