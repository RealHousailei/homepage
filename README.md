# Blog



### 环境准备

node >= 14.0.0



### 使用指南

#### 安装依赖

```sh
yarn
```

修改`docusaurus.config.js`文件中url为自己的域名



#### 本地部署

```sh
yarn start
```

#### 打包静态资源

```sh
yarn build
```

#### 发布（上传至腾讯云储存桶）

复制`.env.example`文件，重命名为`.env`，填上对应的变量

```sh
yarn deploy
```