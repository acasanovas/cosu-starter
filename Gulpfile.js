var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sassdoc = require('sassdoc'),
    browserSync = require('browser-sync').create();

var files = {
    sass: {
        input: './app/sass/**/*.scss',
        output: 'app/css'
    },
    html: {
        input: 'app/**/*.html',
    },
    sassdoc: {
        output: 'app/sassdoc',
    }
};

var sassOptions = {
    outputStyle: 'exapnded'
};

var autoprefixerOptions = {
  browsers: ['last 15 versions', '> 5%', 'Firefox ESR']
};

var sassdocOptions = {
    dest: files.sassdoc.output
}

gulp.task('styles', function () {
  return gulp
    .src(files.sass.input)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(autoprefixerOptions)) //autoprefixer
    .pipe(gulp.dest(files.sass.output))
    .pipe(sourcemaps.write())
    .pipe(browserSync.stream())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(files.sass.output));
});

gulp.task('sassdoc', function () {
    return gulp
        .src(files.sass.input)
        .pipe(sassdoc(sassdocOptions))
        .resume();
});

gulp.task('watch', ['styles'], function(){

    browserSync.init({
        server: "./app"
    });

    gulp.watch(files.sass.input, ['styles', 'sassdoc']);
    gulp.watch(files.html.input).on('change', browserSync.reload);
});


gulp.task('default', ['watch'], function() {
    gulp.start('sassdoc');
});
