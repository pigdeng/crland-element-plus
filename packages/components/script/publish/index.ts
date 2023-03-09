import { componentPath } from '../utils/paths'
import run from '../utils/run'
import { src, dest } from 'gulp'
const fs = require('fs')

// 版本号升级 env:环境变量
const versionPatch = async (env: any) => {
  let info = fs.readFileSync(
    `${componentPath}/transitpkg/package.${env}.json`,
    {
      // path为文件的路径
      encoding: 'utf8', // 指定字符集
      flag: 'r' // 指定读取的模式  具体上面有
    }
  )
  info = JSON.parse(info.toString())
  const versionArr = info.version.split('.')
  const version = parseInt(versionArr.slice(-1)) + 1
  versionArr[versionArr.length - 1] = version
  info.version = versionArr.join('.')

  fs.writeFileSync(
    `${componentPath}/transitpkg/package.${env}.json`,
    JSON.stringify(info)
  )
  return info
}
// 融合 pakeage.json
const assignPackage = async (envInfo: any) => {
  let packageJson = fs.readFileSync(
    `${componentPath}/transitpkg/package.json`,
    {
      encoding: 'utf8',
      flag: 'r'
    }
  )
  packageJson = JSON.parse(packageJson.toString())

  Object.assign(packageJson, envInfo)
  fs.writeFileSync(
    `${componentPath}/dist/package.json`,
    JSON.stringify(packageJson)
  )
}

//复制
const copypackage = async () => {
  return src(`${componentPath}/transitpkg/**`).pipe(
    dest(`${componentPath}/dist/`)
  )
}
//发布组件到内网
export const publish = async (env: any) => {
  const envInfo = await versionPatch(env)
  await assignPackage(envInfo)
  await run(
    'npm publish --access=public --registry http://maven.saas.crland.com.cn/nexus/repository/npm-crland-ued/',
    `${componentPath}/dist`
  )
}

//发布组件到 npm
export const publishNpm = async (env: any) => {
  const envInfo = await versionPatch(env)
  await assignPackage(envInfo)
  await run(
    'npm publish --access=public --registry https://registry.npmjs.org/',
    `${componentPath}/dist`
  )
}
