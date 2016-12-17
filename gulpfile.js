var gulp = require('gulp'),
    del = require("del"),
    ts = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = ts.createProject('tsconfig.json'),
    $ = require('gulp-load-plugins')(),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    minifyJs = require('gulp-uglify'),
    spritesmith = require('gulp.spritesmith'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    buffer = require('vinyl-buffer'),
    merge = require('merge-stream'),
    archiver = require('gulp-archiver'),
    app = {};


var config = {
    vendorLib: require('./vendor.lib.json')
};

var paths = {
    input: {
        main: 'web',
        css: 'web/scss/',
        img: 'web/img/'
    },
    output: {
        main: 'public',
        img: 'public/img/'
    }
};


// Error handler
app.handleError = function (err) {
    app.log(err.toString());
    this.emit('end');
};
// log to console using
app.log = function log(msg) {
    $.util.log($.util.colors.blue(msg));
};

/**
 * Remove build directory.
 */
gulp.task('clean', function () {
    return del.sync([paths.output.main]);
});

/**
 * Compile TypeScript with creating sourcemaps to build directory.
 */
gulp.task('compile:ts', function () {
    var tsResult = gulp.src(paths.input.main + "/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(paths.output.main));
});

/**
 * Compile пїЅss with creating sourcemaps to build directory.
 */
gulp.task('compile:scss', function () {
    return gulp.src(paths.input.css + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', app.handleError))
        .pipe(autoprefixer('last 10 version'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.output.main + '/css'));
});


/**
 * Generate sprite.
 */

gulp.task('sprite', function () {
    var spriteData = gulp.src(paths.input.img + 'icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath: '../img/sprite.png',
            cssName: 'sprite.scss'
        }));
    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest(paths.output.img));
    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
        .pipe(gulp.dest(paths.input.css + 'partials/'));
    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
});


/**
 * Copy all resources that are not TypeScript files into build directory.
 */

gulp.task('resources', function () {
    return gulp.src([paths.input.main + "/**/*", "!**/*.ts", "!src/scss/**"])
        .pipe(gulp.dest(paths.output.main))
});

/**
 * Copy all required libraries into build directory.
 */

gulp.task('libs', function () {
    return gulp.src(config.vendorLib, {base: './node_modules/'})
        .pipe(gulp.dest(paths.output.main + "/lib"));
});

/**
 * Generate archive.
 */

gulp.task('archive', ['build'], function () {
    return gulp.src(paths.output.main + '/**')
        .pipe(archiver('archive.zip'))
        .pipe(gulp.dest('.'));
});

/**
 * Build the project.
 */
gulp.task('build', ['clean', 'sprite', 'compile:scss', 'compile:ts', 'resources', 'libs'], function () {
    console.log("Building the project ...")
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', ['build'], function () {
    gulp.watch([paths.input.main + "/**/*.ts"], ['compile:ts']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch([paths.input.main + "/**/*.html", paths.input.main + "/img/**"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch([paths.input.img + "icons/*.png"], ['sprite']).on('change', function (e) {
        console.log('Sprite file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch([paths.input.css + '**'], ['compile:scss']).on('change', function (e) {
        console.log('scss file ' + e.path + ' has been changed. Updating.');
    });
});