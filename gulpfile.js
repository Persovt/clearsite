const {src,dest, parallel, series, watch} = require('gulp');
const browserSync =     require('browser-sync').create();
const sass      =require('gulp-sass');
const autoprefixer  =    require('gulp-autoprefixer')

function browsersync() {
    browserSync.init({
        server: {baseDir: 'docs/'}
                     
    })
}

function styles(){
    return src(
    'docs/style/scss/style.scss'
    )
    .pipe(sass())
    .pipe(autoprefixer({
        overrideBrowsersList: ['last 10 version'],
        grid: true,
        flex: true
    }))
    .pipe(dest('docs/style/css/'))
}

function startWatch() {
    watch('docs/style/scss/*.scss', styles)
}
exports.browserSync = browsersync;
exports.styles      = styles;
exports.wath        = startWatch;
exports.default      =parallel(startWatch, styles)