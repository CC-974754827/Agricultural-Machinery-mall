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
　　标准模式：box-sizing:content-box;   
　　怪异模式：box-sizing:border-box;    
    在标准模式下，一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)
    在怪异模式下，一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）

标准模式会被设置的padding撑开，而怪异模式则相当于将盒子的大小固定好，再将内容装入盒子。盒子的大小并不会被padding所撑开
```


推荐商品
```
运用到弹性盒模型
父元素：display: flex;
        flex-wrap:wrap;   //换行
        justify-content:space-around;   //子元素均匀分布   每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
        【justify-content:space-between; //子元素均匀分布   两端对齐，项目之间的间隔都相等。】
子元素：flex-basis: 45%    //设置宽度。有它时，width不起作用
  【flex-basis 设置宽度属性 Flex Items的应用准则
      content –> width –> flex-basis (limted by max|min-width)
      如果没有设置flex-basis属性，那么flex-basis的大小就是项目的width属性的大小
      如果没有设置width属性，那么flex-basis的大小就是项目内容(content)的大小
   】
flex-basis与width关系？
   只是当flex-basis设置为auto且width（或者height）不为auto时，计算flex-basis的used size时会用到width（或者height）的值。
```


vue的生命周期(钩子函数:每一个阶段，vue会自动的调用一些方法，容易的在相应阶段进行一些处理)
```
vue的钩子函数/生命周期：每一个阶段，vue会自动调用一些方法，比较方便的在相应阶段进行一些处理
	created()与mounted()的区别？
		created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
		mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
```

mock.js
```
生成随机数据，拦截Ajax请求
安装mock npm install mockjs --save-dev
安装ajax npm install axios --save

//拦截ajax请求
created(){
  let url = '';
  axios.get(url).then(res=>{   //url与mock中的url一致
    console.log(res);
  });
}  
//mock.js
import Mock from 'mockjs';
import data from './data.json'   //json文件
Mock.mock('url',{data:data.list})；

//随机数据
//属性名和生成规则之间用竖线 | 分隔。
①Mock.mock('url',{
  'name|2':'111',   //重复两次
  'age|18-24':20    //18-24的随机数
});
②正则表达式
Mock.mock('url',{
  'one':/[a-z][A-Z][0-9]/,
  'two': /\d{5,10}/       // \d整数 重复5-10次
});
③产生；列表  //@占位符
Mock.mock('url',{
  'info|10-20':[    //生成10-20条列表
    {
      'index|+1':1,    //每次自增1
      'name': '@first @last',   //真实名字
      'id': '@integer(10000,99999)',   //整数
      'date': '@datetime',
      'img': '@image("200*200")',
      'text': '@sentence(6,22)'   //随机句子 
    }
  ]
});

//Mock.Random 随机生成信息
let random = Mock.Random;


//统一接口
src/service.config.js
<!-- 统一接口 -->//代码优化
const MOCKURL = 'http://www.long.com'   //mock模拟
const SERVERURL = '';  //真实接口
const URL = {
    getVarietyItem : MOCKURL + 'getVarietyItem',
}
//导出
export default URL;
```

koa
```
koa，基于Node.js[koa,express]，
	Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。 
	基于koa的框架：egg【企业级框架】,thinkjs

安装
①安装node ： http://nodejs.org/zh-cn/   
http://koa.cootcss.com
koa 依赖node v7.6.0 或 ES2015及更高版本 和async方法支持
②npm init -y    //生成package.json
③npm install koa --save
```
