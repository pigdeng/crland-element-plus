## 注意事项

请使用 pnpm，如果您使用`npm install`来安装依赖，有可能导致运行错误。
如遇上述情况可以删除 `node_modules`文件夹，再运行`pnpm install`

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

### 设置 npm 源地址

<!-- npm config set registry http://10.72.47.10:8081/repository/crland-group/ -->

npm config set registry http://maven.saas.crland.com.cn/nexus/repository/npm-group/

### 登录私服 npm

<!-- npm login -registry=http://10.72.47.10:8081/repository/crland/ -->

npm login -registry=http://maven.saas.crland.com.cn/nexus/repository/npm-crland-ued/

### 打包

pnpm build

### 发布

pnpm run publish
