##基于React + React-router + webpack 的CMS.
___

第一个react项目，由于项目比较小，没有使用redux。由于设计的功能点太多。所以留了部分坑，时间受限没有全部实现。部分代码比较粗糙
###技术点
___

####前端:
 - React -- 组件和逻辑
 - React-dom -- 组件渲染
 - React-router -- 路由
 - webpack -- 打包构建
 - babel -- 编译ES6
 - jsx -- render代码编写

 ### 后端:
 - NodeJs && express -- 服务、路由、API
 - mongodb && mongoose -- 数据库
 - passport -- 对密码加密、salt 及校验

 ###部署
 - Apache -- 通过二级域名的方式解析系统
 - pm2 -- nodeJS 服务部署管理工具

###功能点
___
- 用户注册及登陆
- 博文的增删改查
- 登陆后获取用户信息用以发布和修改文章
- 反向代理（开发时使用webpac 部署使用Apache）和rewrite

###部署
___
####开发部署:
  建议使用[cnpm](https://npm.taobao.org/) 进行 cpm包的安装，速度要快很多
  注:以下步骤默认你已经安装 [NodeJs](https://nodejs.org/en/) 和 [mongodb](https://www.mongodb.com/cn)
1. ```git clone  https://github.com/me-jser/react-cms.git ```
2. ```cnpm install```  安装前端依赖
3. ``` cd server && cnpm install ``` 安装服务端依赖
4.当前你应在 cms/server 目录 运行 ``` node app.js ``` 启动API服务
5.``` cd .. &&  webpack-dev-server --hot --inline``` 启动webpack服务

####服务器端部署
