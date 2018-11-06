var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCss = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		},
		noify: false,
	});
});

gulp.task('styles', function(){
	return gulp.src('app/scss/**/*scss')
	.pipe(sass({ outputStyle: 'expanded' }))
	.pipe(rename({suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['cover 99%']))
	// .pipe(cleanCss({level:{1:{ specialComments: 0 }}}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task("javaScript", function () {
  return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'app/js/*.js'])
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat("all.js"))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("app/dest/"))
      .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['javaScript','styles', 'browser-sync' ], function(){
	gulp.watch('app/scss/**/*scss', ['styles']);
	gulp.watch(['app/js/site.js'], ['javaScript']);
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);