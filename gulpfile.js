const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('default', ["css", "js", "images"]);

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
}))

.pipe(cleanCSS({compatibility: 'ie8'}))

    .pipe(gulp.dest("./dist/css/"))
});


gulp.task('images', function(){
    gulp.src('./src/images/*')

    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))

});

gulp.task('js', function(){
    gulp.src('./src/js/*.js')

    .pipe(babel({
        presets: ['env']
    }))

    .pipe(concat('main.js'))

    .pipe(uglify())

    .pipe(gulp.dest('./dist/js/'))

});

gulp.task('watch', ['css', 'js', 'images'], function () {
    gulp.watch("./src/css/*.css", ["css"]);
})







