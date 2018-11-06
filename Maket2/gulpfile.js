var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	cleanCss = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel'),
	sourceMaps = require('gulp-sourcemaps');

gulp.task('browser-sync', function(){
	browserSync({
		server:{
			baseDir: 'app'
		},
		noify: false,
	});
});

gulp.task('styles', function(){
	return gulp.src('app/scss/**/*.(sc|sa)ss')
	.pipe(sass({ outputStyle: 'expanded' }))
	.pipe(rename({suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['cover 99%']))
	.pipe(cleanCss({level:{1:{ specialComments: 0 }}}))
	.pipe(gulp.desr('app/css'))
	.pipe(browserSync.stream());
});

gulp.task("javaScript", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', ['javaScript','styles', 'browser-sync' ], function(){
	gulp.watch('app/scss/**/*.(sc|sa)ss', ['styles']);
	gulp.watch(['app/js/common.js'], ['javaScript']);
	gulp.watch('app/*.html', browserSync.reload)
})
