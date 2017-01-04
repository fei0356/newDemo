var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

 
gulp.task('default', function () {
  gulp.src('img/*.png')
  	.pipe(imageResize({
            width: 240,
         
        }))
    .pipe(gulp.dest('dist/'));
});

// gulp.task('default', function () {
//   gulp.src('img/*.png')
//   	.pipe(imagemin({
//   		 progressive: false,
//          use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
//   	}))
//     .pipe(gulp.dest('dist/'));
// });

