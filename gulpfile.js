const { src } = require('gulp');
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', async function() {
    del.sync('dist')
});

gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function() {
    return gulp.src([
        'node_modules/normalize-css/normalize.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/animate.css/animate.css'
    ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('src/scss'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('src/**/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function() {
    return gulp.src('src/js/*.js')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/wow.js/dist/wow.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

const copy = (src, dist) => new Promise((resolve) => gulp.src(src).pipe(gulp.dest(dist)).on('end', resolve));

gulp.task('export', (done) => Promise.all([
    copy('src/**/*.html', 'dist'),
    copy('src/css/**/*.css', 'dist/css'), 
    copy('src/js/**/*.js', 'dist/js'),
    copy('src/fonts/**/*.*', 'dist/fonts'),
    copy('src/img/**/*.*', 'dist/img')
]).then(() => done()));

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
    gulp.watch('src/*.html', gulp.parallel('html'))
    gulp.watch('src/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));



