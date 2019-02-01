const gulp = require('gulp'),
postcss = require('gulp-postcss'),
atImport = require('postcss-import'),
mixins = require('postcss-mixins'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

//Declaring method
function styles() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([atImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
}

//Registering method
gulp.task("styles", styles);

// Command line tasks to run functions in series()
gulp.task("default", gulp.series(styles));
