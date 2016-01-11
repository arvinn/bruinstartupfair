var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var deploy       = require('gulp-gh-pages');
var del          = require('del');


var paths = {
  html: 'src/**/*.html',
  scss: ['src/scss/**/*.scss'],
  scripts: ['src/js/**/*.js'],
  images: ['src/img/**/*'],
};


gulp.task('clean', function() {
  return del(['build']);
});


gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'build'
    }
  })
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
             .pipe(gulp.dest('build/'))
             .pipe(browserSync.stream());
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
             .pipe(gulp.dest('build/img'))
             .pipe(browserSync.stream());
});

gulp.task('media', function() {
  return gulp.src('src/media/**/*')
             .pipe(gulp.dest('build/media'))
             .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
             .pipe(sass())
             .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascasde: false
             }))
             .pipe(gulp.dest('build/css'))
             .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
             .pipe(gulp.dest('build/js'))
             .pipe(browserSync.stream());
});

gulp.task('build', ['html', 'sass', 'images', 'scripts', 'media']);

gulp.task('watch', ['browserSync', 'build'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch('src/media/**/*', ['media']);
});

gulp.task('default', ['watch']);

gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy())
});
