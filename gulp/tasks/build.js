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
            baseDir: "docs"
        },
        notify: false
    });
});

gulp.task('deleteDist', ['icons'], () => {
    return del('./docs');
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
        .pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImg', ['deleteDist'], () => {
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
        .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDist'], () => {
    gulp.start('usemin');
});

gulp.task('usemin', ['css', 'scripts'], () => {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [() => { return rev() }, () => { return nano() }],
            js: [() => { return rev() }, () => { return uglify() }]
        }))
        .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDist', 'otherFiles', 'optimizeImg', 'useminTrigger']);
