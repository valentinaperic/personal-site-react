var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename'); 

gulp.task('sass', function() {
  gulp.src('build/css/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('C:/Users/Valentina Peric/Desktop/Projects/personal-site/src/'));
});


gulp.task('minify-css', ['sass'], function() {
  gulp.src('C:/Users/Valentina Peric/Desktop/Projects/personal-site/src/app.css')
  .pipe(rename('app.min.css'))
  .pipe(minify())
  .pipe(gulp.dest('C:/Users/Valentina Peric/Desktop/Projects/personal-site/src/'));

});

gulp.task('default', ['minify-css']);
