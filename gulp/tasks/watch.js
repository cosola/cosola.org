const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


//Method declarations

function browser_sync(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
}

function reload(done){
	browserSync.reload();
	done();
}

function cssInject() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
};

function watch_files() {
	gulp.watch('./app/index.html', reload);
	gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles', cssInject));
};


// Registering methods
//Run gulp + "name" w/o "" to verify registration. Exp gulp html

gulp.task("browser_sync", browser_sync);
gulp.task("reload", reload);
gulp.task("watch_files", watch_files);
gulp.task("cssInject", cssInject);

// Running tasks in series or parallel
gulp.task("default", gulp.series(cssInject));
gulp.task("watch", gulp.parallel(browser_sync, watch_files));
