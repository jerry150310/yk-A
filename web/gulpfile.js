const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const webserver = require("gulp-webserver");

//编译sass
gulp.task("devCss", () => {
        return gulp.src("./src/scss/**/*.scss")
            .pipe(gulpSass())
            .pipe(gulp.dest("./src/css"))
    })
    //服务器
gulp.task("server", () => {
        return gulp.src("./src")
            .pipe(webserver({
                port: 9898,
                proxies: [{
                    source: "/api/list",
                    target: "http://localhost:3000/api/list"
                }, {
                    source: "/api/delList",
                    target: "http://localhost:3000/api/delList"
                }, {
                    source: "/api/addList",
                    target: "http://localhost:3000/api/addList"
                }, {
                    source: "/api/upList",
                    target: "http://localhost:3000/api/upList"
                }]
            }))
    })
    //watch 监听
gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", gulp.series("devCss"));
})

gulp.task("default", gulp.series("devCss", "server", "watch"));