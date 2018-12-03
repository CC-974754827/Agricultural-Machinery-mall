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

<font color=#ff0>ul自带40px的左内边距padding</font>
<font color=#ff0>body自带8px外边距margin</font>

#### 底部菜单功能--列表
```
（1）
①自适应：百分比方法适合一部分情况，所以采用弹性盒模型方法
//如果子元素因为内容的关系，不能按效果分布，需要在子元素上添加width: 0;
②始终位于底部

views/
  <template></template>
  <script>export default{}</script>
  <style lang="scss"></style>
  
渲染在何处<router-views></router-views>
路有链接<router-link></router-link>
（2）v-model双向数据绑定
数据层改变 <===> 界面改变
```

#### vant 轻量、可靠vue组件库（适用于商城）

其他组件库：
```
vux（移动端）
element（pc端）
iview（后端管理系统，i18n国际化）
museui
```
命令
```
npm：node package manage
npm run serve:package.json下的scripts的serve[执行]，build[打包]，lint[语法检查]
dependencies  生产（上线）  【包是--save -S】
devdependencies  开发    【包是--save-dev -D】【eg：eslint语法检查】
```

安装
```
npm install vant --save

导入全部组件【置于main.js】
import Vant from 'vant';
import 'vant/lib/index.css';  //与上面的引入有依赖关系
Vue.use(Vant);

按需求引入组件
npm i babel-plugin-import -D
一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

//手动引入main.js
import { Button, Cell } from 'vant';
Vue.use(Button).use(Cell);   //jquery的链式操作
```

轮播图
```
原生：
左右滑动：
  图片布局方式：水平分布
  父元素设置溢出隐藏overflow:hidden
淡入淡出：
  图片叠在一起


vue组件
图片懒加载
//图片太多，服务器压力大
//每次只加载2张
import Vue from 'vue';
import { Lazyload } from 'vant';
// options 为可选参数，无则不传
Vue.use(Lazyload, options);
```

热门商品
```
Vue-Awesome-Swiper组件，适用于 Vue 的轮播组件，支持服务端渲染和单页应用。

用到怪异盒模型
　　标准模式：box-sizing:content-box;   宽度：内容
　　怪异模式：box-sizing:border-box;    宽度：内容+padding+border+margin
标准模式会被设置的padding撑开，而怪异模式则相当于将盒子的大小固定好，再将内容装入盒子。盒子的大小并不会被padding所撑开
```
