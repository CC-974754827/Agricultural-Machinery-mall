### 移动端农机商城
```
项目描述：
  实现一个综合性的移动端农机商城项目，类似京东商城、天猫商城，用户可以在商城中浏览、搜索、下单以及进行其他的相关活动；整体页面采用响应式设计，可应用于不同分辨率的机型；前后端数据分离，前端采用vue及基于vue的移动端组件库vant搭建整体框架，实现单页面应用(SPA)；运用ES6语法解决页面兼容性问题；运用ajax异步请求，每次仅加载几条数据，提升用户体验感；通过Node.js平台将js代码运行在服务端，并采用基于Node.js的后端框架koa；采用
  作为后端数据库支持

项目功能：
  前台：商品搜索；商品展示；购物车；注册&登陆；订单提交；支付等功能
  后台：商品管理；商品推荐；订单管理；用户管理等功能
  比如：ajax异步加载，通过下拉刷新，然每次仅加载几条数据，增强用户体验感；用户登陆密码，采用加严加密的方法，用户安全性大幅度提升；针对不断点击按钮时所发出的请求，采用数据节流等方法，防止重复提交所造成的拥堵

技 术 栈：vue+vant+ES6+Node.js+Koa+MongoDB

开发平台：VSCode  --微软开发，运行速度快
```
#### 前端结构初始化及目录结构介绍
```
Node环境：
  安装：https://nodejs.org/zh-cn/
  查看版本号：node -v
Vue-cli3
  安装：npm install -g @vue/cli            //npm Node管理包工具
  查看版本号:vue -V
  创建项目:vue create 项目名称（或者 vue ui 创建[图形化界面]）
  进入项目： cd 项目名称
  运行项目：npm run serve  
  
  
 创建时自定义：
  Babel：将ES6语法进行转化
  Router：vue-router 路由管理
  Vuex：vuex状态管理
  Css：sass预处理
  
 文件结构：node-moduies（所有需要依赖的文件 包管理[npm install 安装依赖]）
          public：上线打包的文件，部署在服务器（生产环境）
          src：源文件
          其他：配置文件
          .gitignore：git
          package.json：dependencies生产环境依赖；devDependencies开发环境依赖
          package-lock.json:锁定版本号
  对比vue-cli2：结构简单，vue-cli2其配置文件在外
```
#### 移动端屏幕适配方案
```
（1）百分比
（2）媒体查询 @media(条件){改变}
（3）弹性盒模型 父元素[display: flex;] 子元素[flex-grow: 1;]
（4）rem [引入rem.js文件]一种单位，相对于html根元素[rem：root]，以iPhone5为模板，分成6.4份【em：相对于父元素】
```
<font color=#ff0>margin自带8px</font>

#### 底部菜单功能--列表
```
①自适应：百分比方法适合一部分情况，所以采用弹性盒模型方法
②始终位于底部
```
