const gulp = require('gulp');
const modernizr = require('gulp-modernizr');

gulp.task('modernizr', () => {
    return gulp.src([
        './app/assets/css/**/*.css',
        './app/assets/js/**/*.js'
    ])
        .pipe(modernizr({
            options: ['setClasses']
        }))
        .pipe(gulp.dest('./app/temp/js/')); 
});
