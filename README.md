### 一.前期准备

#### 1.安装脚手架

* `npm i @vue/cli -g` 全局安装脚手架
* ``vue init webpack 项目名称` 初始化工程
* `npm i` 安装相关依赖
* `npm run dev` 运行

#### 2.配置css预处理器

这里我使用的是scss预处理器，别的像less和stylus也大同小异，但是scss有一个坑就是要安装node-sass,如果你的电脑上没有python2会报错。

* 先安装对应的loader 

`npm i sass sass-loader -D`

* 然后在webpack.base.config.js中配置相关的loader否则无法通过编译(添加到rules中)

```javascript
{
test: /\.(scss|sass)$/,
loaders: ["style-loader", "css-loader", "sass-loader"]
}
```

* 在vue中如何使用
  * 直接在style中使用`<style lang="scss"></style>`
  * 在style中引入外部的scss `@import 路径`

#### 3.修改文件默认路径

在build->webpack.base.config->resolve->alias中写入

```
'common':resolve('src/common')
```

下次引入的时候`~common`就代表`src/common`

#### 4.配置本地静态数据库

一开始我们可以先通过访问static模拟后台数据，等到上线后替换即可。

static->mock->index.json

然后在config下的index.js修改如下代码

```javascript
 proxyTable: {
      '/api':{
      target:'http://localhost:8080',
      pathRewrite:{'^/api':'/static/mock'}}
 },
```

#### 5.开发工具vscode

* 配置vue模板
  * 文件->首选项->用户代码片段->vue.json 写入模板即可
  * 创建.vue文件，输入vue回车即可出现编好的模板
* 安装vue相关插件
  * auto close tag:自动闭合插件
  * eslint:语法检测插件

#### 6.关于ui组件

该项目并没用到相关组件，如需可以自己引入

### 二.需要具备的技术栈

#### 1.vue基本知识

#### 2.vuex基本知识

#### 3.koa

#### 4.mongoDB

### 三.项目主要目录结构

```
├── src
│   ├── common //放置静态文件
│   |   ├── gallary //公用画廊
|   |   ├── fonts   //字体
|   |   ├── css     //css样式
│   |   └── sass    //sass表
│   ├── pages
|   |   ├── home    //主页组件
|   |   ├── city    //城市列表组件
|   |   ├── detail  //详情组件
├── APP.vue //项目主组件，后续路由显示在router-view中
└── main.js //入口文件：初始化vue，使用相关插件
└── route   //路由配置文件
|   ├── index.js   
└── store    //vuex配置文件
```

### 四.组件开发

#### 1.home组件开发

```
├── home
│   ├── components //放置home组件
│   |   ├── home-header
|   |   ├── home-swiper   
|   |   ├── home-icons    
|   |   ├── home-recommend
|   |   ├── home-weekend  
│   |   └── home-footer    
├── Home.vue
```

组件开发难点：

* swiper组件中用到awesome-swiper插件，[官方文档](https://www.npmjs.com/package/vue-awesome-swiper)

* icons组件中类似九宫格的布局

* 百度定位API

  * ```
    var map = new BMap.Map("container");
    var myCity = new BMap.LocalCity();
    myCity.get((result)=>{
    	var cityName = result.name;
    	container.innerHTML=cityName;
    }); 
    ```

首页其实相对简单，主要是布局，需要扎实的html，css基础

#### 2.city组件开发

```
├── city
│   ├── components //放置home组件
│   |   ├── city-header
|   |   ├── city-search  
|   |   ├── city-list    
│   |   └── city-sider  
├── City.vue
```

##### 2.1 搜索页面

* 智能搜索功能：
  * 使用v-model进行双向绑定value值
  * 通过watch代替blur事件，进行搜索提示，将每次变化的kword,在数据中遍历查询，匹配到一个字母或者汉字的结果就将其放到一个数组中
  * 在视图层中循环出这个数组即可

- 搜索结果功能：
  - 何时显示搜索结果的框，一开始我想的是用input事件，但是input事件有个bug是搜索框内容为空的时候，搜索结果框并没有消失，还是会显示之前智能提示的结果，然后果断想到了用kword判断，完美解决
  - 展示搜索结果，如果没有匹配到数据，就通过v-show判断来显示事先写好的没有找到结果的布局。

* 搜索防抖处理：
  * 频繁输入关键词页面会频繁切换影响用户体验，所以这里用了防抖技术，也就是定义一个延时的定时器，规定一段时间内出现搜索结果，但是当接收到用户输入关键词时又会立刻停止定时器。只保证搜索结果展现到页面时是延时效果。
  * 这里还会出现一个问题，就是添加防抖处理后每次都是延时才会拿到返回结果，但是我们定义的没有找到结果的组件中v-show是靠这个结果的长度来判断显示的，这样一来势必会造成先显示没有找到结果的页面然后等延时过后拿到数据之后，突然又显示出结果。这势必又会影响用户体验，我解决的办法是，添加一个开关，在data中添加`isSearch` 来解决，刚查找时为true，查找完毕之后为false轻松解决。
* 页面效果展示

![](https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/qunaer/travel-search.gif)



##### 2.2 list页面中的滚动功能

* 解决出现滚动条的问题，将布局容器先设置`overflow:hidden` 然后使用了better-scroll，具体如何使用可以参考官方文档。[官网](https://www.npmjs.com/package/better-scroll)  这里就说下几个注意点

  * 一定要在mounted中创建实例，因为这个时候dom渲染完毕，如果在created里使用会无效，因为created调用时还没有生成dom元素。

  * 点击无效情况，可能是没有设置click

    ```javascript
    mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{click:true,tap: true});
    }
    ```

##### 2.3 sider

* 采用固定定位在右侧
* 点击字母左边列表滚动到对应字母功能
  * 兄弟组件传参：兄弟1->父亲->兄弟2，sider列表绑定点击事件通过e.target.innerHTML获取字母，然后通过$emit将值传给父组件，父组件再将数据传给list组件，list组件通过props接收数据
  * 如何滚动？better-scroll提供了一个API，`  this.scroll.scrollToElement(element);`，如何获取对应的element呢？vue中想要获取dom元素可以这样获得，给元素添加属性`ref="name"` ，在js中使用this.$refs.name即可获得


* 最终效果

![](https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/qunaer/travel-sider.gif)

#### 3.detail组件开发

```
├── detail
│   ├── components //放置home组件
│   |   ├── detail-header
|   |   ├── detail-banner     
│   |   └── detail-list  
├── Detail.vue
```

##### 3.1header悬浮变换功能

* 两个header，随着页面滚动到一定距离，将其中一个显示另一个隐藏。
* 两个新的生命周期函数：activated(出现新页面时)，deactivated(离开页面时)

```javascript
activated(){
window.addEventListener("scroll",this.getScrollTop);
},
deactivated(){
window.removeEventListener("scroll",this.getScrollTop); 
}
```

* 使用activated必须在router-view的外层包裹keep-alive，keep-alive简而言之就是减少http请求不用每次都重复请求服务器。
* 全局函数要进行解绑，否则每个页面都会触发该事件。
* Vue中判断y轴滚动距离的API是`document.documentElement.scrollTop`,之前一直以为是`document.body.scrollTop`,查了资料说是DCTYPE的原因。

##### 3.2如何解决路由跳转回到顶部

* 在路由配置中写入

```javascript
scrollBehavior(to,from,savePosition){
return {x:0,y:0}
}
```

##### 3.3画廊制作

* 功能描述：点击图片，放大到全屏，并可以来回拖动，再次点击恢复正常
* 思路也很简单，banner组件传递图片数据到gallary组件，然后遍历展示即可，点击放大可以用变量来控制显示隐藏。

![](https://hansu-1253325863.cos.ap-shanghai.myqcloud.com/qunaer/travel-detail.gif)



#### 4.VUEX—共享城市数据

没有任何关联的两个组件，如何传值

将公共数据存储到固定区域store

state:{name:value}

通过this.$store.state.name可获取数据

如何修改数据？

先介绍几个API

* mutations(){}类似methods,定义方法

```javascript
//store.js中
mutations(){
函数名(state,参数){
.....
}
}
//外部如何调用
//1.先绑定事件
//2.定义函数，在函数中用this.$store.commit("mutation中的函数名",要传入的参数)
```

* getters(){},类似计算属性，对数据处理后返回

```javascript
//store.js中
getters(){
addCount:(state){
return state.count++;
}}
//外部如何调用
this.$store.getters.addCount 即可获取返回值 
```

* actions(){}，类似mutations,不同之处在于actions中可以执行异步操作。

```javascript
mutations(){
函数名(state,参数){
.....
}},
actions(){
函数名(ctx,参数){
ctx.commit("mutations的函数名",参数)
}}
//外部如何调用
//1.先绑定事件
//2.定义函数，在函数中用this.$store.dispatch("actions中的函数名",要传入的参数)
```

好了，知道以上基本就可以实现城市信息共享了

stroe>index.js

```javascript
mutations:{
changeCity(state,city){
    state.city=city;
}
},
```

页面中需要用到数据的地方使用`{{this.$store.state.city}}` 获取城市数据

动态修改城市数据

```javascript
methods:{
handleCityClick(city){
// this.$store.dispatch("changeCity",city);
this.$store.commit("changeCity",city);
}
},
```

以上就是仿去哪儿网的一些心得，后续还会更新.......

