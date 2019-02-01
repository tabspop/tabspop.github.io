var gulp = require('gulp');
var CleanCSS = require('gulp-clean-css');

gulp.task('css', function(){
   return gulp.src('css/full-width-pics.css')
  .pipe(CleanCSS())
  .pipe(gulp.dest('dist'))
});

gulp.task('html', function(){
  return gulp.src('index.html')
  .pipe(gulp.dest('build'))
})


