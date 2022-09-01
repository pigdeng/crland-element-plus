import { src, dest } from 'gulp'
import { componentPath } from '../utils/paths'
// import less from "gulp-less"
const sass = require('gulp-sass')(require('sass'));
import autoprefixer from 'gulp-autoprefixer'
import run from "../utils/run"

//删除dist
export const removeDist = () => {
    return run(`rm -rf ${componentPath}/dist`, componentPath)
}


//处理样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(
          autoprefixer()
      )
      .pipe(dest(`${componentPath}/dist/lib/src`))
      .pipe(dest(`${componentPath}/dist/es/src`));
};

//静态文件处理
export const buildImg = () => {
  return src(`${componentPath}/src/**/img/*`)
      .pipe(dest(`${componentPath}/dist/lib/src`))
      .pipe(dest(`${componentPath}/dist/es/src`));
};

//打包组件
export const buildComponent = async () => {
    run('pnpm run build', componentPath)
}