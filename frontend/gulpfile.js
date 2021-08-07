"use strict";

//Requireds
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
//var reload = browserSync.reload;

//compile SCSS to CSS
function style() {
    return gulp.src("./scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
    console.log("stylized!");
}

function watch() {
    style();

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./scss/*.scss", style)
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./js/*.js", style).on("change", browserSync.reload);
}

exports.watch = watch;
