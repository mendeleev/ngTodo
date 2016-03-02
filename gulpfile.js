(function () {
  var gulp = require("gulp"),
      sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer");

  gulp.task('default', function () {
    gulp.watch("./app/scss/**/*.scss", ["style"])
  });

  gulp.task("style", function() {
    gulp.src("./app/scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer({
        browsers: ["last 2 versions"]
      }))
      .pipe(gulp.dest("./app/css/"));
  });
})();