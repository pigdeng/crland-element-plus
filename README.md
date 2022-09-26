## 安装 pnpm

npm i pnpm -g

## 安装所有依赖

pnpm install

## 本地测试

pnpm run exm:dev

## 打包

pnpm run build

## 发布

pnpm run publish

## 启动文档

pnpm run docs:dev

## 打包文档

pnpm run docs:build

## 启动打包后文档服务

pnpm run docs:serve

## 执行组件库测试

pnpm run test

## 查看测试覆盖率

pnpm run coverage


## 链接到本地私服
### 设置npm源地址
npm config set registry http://10.72.47.10:8081/repository/crland-group/
### 登录私服npm
npm login -registry=http://10.72.47.10:8081/repository/crland/
### 发布
npm publish -registry=http://10.72.47.10:8081/repository/crland/

