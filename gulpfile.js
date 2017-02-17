const gulp = require('gulp');
const del = require('del');
const change = require('gulp-change');

const filesToCopy = [
  'server/**/*',
  'package.json'
];

gulp.task('default', ['static']);

gulp.task('static', ['clean'], () =>
  gulp.src([
    'client/assets/**/*'
  ], { base: './client' })
    .pipe(gulp.dest('dist'))
);

gulp.task('dist', ['test'], () => {
  gulp.run('build');
});
gulp.task('build', [ 'static', 'update' ]);

gulp.task('move', [ 'clean' ], function () {
  return gulp.src(filesToCopy)
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del([ 'dist' ]);
});
