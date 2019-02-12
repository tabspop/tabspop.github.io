var gulp = require('gulp');
var CleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

gulp.task('css', function(){
   return gulp.src('css/full-width-pics.css')
  .pipe(CleanCSS())
  .pipe(gulp.dest('build/css'))
});

gulp.task('html', function(){
  return gulp.src('index.html')
  .pipe(gulp.dest('build'))
  .pipe(browserSync.stream({match: 'index.html'}));
})

gulp.task('browser-sync', function() {
  browserSync.init({
      injectChanges: true,
      server: {
          baseDir: "/build"
      }
  });
});


gulp.task('watch', function() {
  gulp.watch('index.html', gulp.series('html','browser-sync'));
  gulp.watch('css/full-width-pics.css',gulp.series('css'));
});

