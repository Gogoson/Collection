# 前端基础知识汇总

## 1、ES5有哪些新变化
   1. 增加严格模式
   2. 提供一个全局的JSON对象（JSON.stringify 和 JSON.parse）
   3. Object上的构造器增加了很多有用的方法，对对象的属性有了更好的控制（可读、可枚举、可删除、可配置)。
    * Object.getPrototypeOf
    * Object.getOwnPropertyDescriptor
    * Object.getOwnPropertyNames
    * Object.create
    * Object.defineProperty
    * Object.defineProperties
    * Object.seal
    * Object.freeze
    * Object.preventExtensions
    * Object.isSealed
    * Object.isFrozen
    * Object.isExtensible
    * Object.keys
   4. 数组原型增加了实用的方法其中Array.isArray直接加在构造器上，不是原型,它使用是对象的内在的[[Class]]属性来判断,跟Object.prototype.toString.apply(value) === '[object Array]'的原理是一样的。   
    * Array.prototype.indexOf
    * Array.prototype.lastIndexOf
    * Array.prototype.every
    * Array.prototype.some
    * Array.prototype.forEach
    * Array.prototype.map
    * Array.prototype.filter
    * Array.prototype.reduce
    * Array.prototype.reduceRight   
    5. Function.prototype.bind 使用它我们可以借用其他函数作用链执行一个函数   

## 2、严格模式有什么用
   1. IE9及以下不支持严格模式，IE10开始支持严格模式。
   2. 严格模式一般出现在全局，也可以出现在函数内，但函数的严格模式与全局的严格模式是无关的，互相独立的。
   3. 严格模式主要是让代码更加严谨，减少出错的可能，以下在严格模式下会报错或行为：
      * 未声明变量进行赋值操作
      * 改写只可读的属性
      * 对不可扩展的对象进行属性添加
      * 对一个不可配置的对象进行删除操作
      * 函数入参重名
      * 变量名或函数名使用关键字
      * this不再指向window
      * with语句不允许
      * 不可更改arguments对象的值
      * arguments.callee不允许使用

## 3、ES6有哪些新特性
   1. 变量声明const和let，作用域在{}开始起作用了
   2. 模板字符串，反单引号来作为标识，${}内部访问变量，也增加很多ES6的字符串方法，常用有includes、startsWith、endsWith、repeat
   3. 为函数参数提供了默认值，提供rest参数
   4. 箭头函数，不需要function关键字来创建函数，省略return关键字，继承当前上下文的 this 关键字
   5. 拓展的对象功能，键值对重名可省略冒冒号和值，函数可省略冒号与 function 关键字，提供Object.assign()进行浅复制
   6. 解构，从对象或者数组里取出数据存为变量
   7. 展开运算符（...）,合并对象或者数组，或者切取对象或数组的一部分
   8. mport 和 export
   9. Promise，用同步的方式去写异步代码
   10. Generators，生成器函数也是一种函数，最直观的表现就是比普通的function多了个星号*，在其函数体内可以使用yield关键字,有意思的是函数会在每个yield后暂停，可调用next方法进行唤醒。
   11. class、extends、super，在constructor里调用super(),因为子类没有自己的this对象，要继承父类的this对象
   
## 4、怎么理解Promise  
   1. 异步编程的一种解决方案
   2. ES6 将其写进了语言标准，原生提供了Promise对象
   3. 从语法上说，Promise 是一个对象，从它可以获取异步操作的消息
   4. Promise对象的状态不受外界影响，一旦状态改变，就不会再变
   5. Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled(resolved)（已成功）和rejected（已失败）
   6. 缺点是无法取消Promise，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
   7. then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数
   8. Promise.prototype.catch方法是.then(null, rejection)的别名
   9. 一般then和catch搭配使用，then中只传入resolved状态的回调函数
   10. Promise.resolve方法能将现有对象转为 Promise 对象
   11. thenable对象指的是具有then方法的对象
   12. 立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时
   13. Promise的优势在于，可以在then方法中继续写Promise对象并返回，然后继续调用then来进行回调操作
   14. then中的回调采用异步的方式处理是为了保证代码执行的一致性
   
## 5、怎么理解BFC
   1. Block Fromatting Context
   2. BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列
   3. 创建BFC，只需要满足这些条件之一即可：
      * float的值不是none。
      * position的值不是static或者relative。
      * display的值是inline-block、table-cell、flex、table-caption或者inline-flex
      * overflow的值不是visible   
   4. 在BFC中，盒子从顶端开始垂直地一个接一个地排列，两个盒子之间的垂直的间隙是由他们的margin 值所决定的。在一个BFC中，两个相邻的块级盒子的垂直外边距会产生折叠.
   5. BFC的作用：
      * 利用BFC避免外边距折叠，若两个相邻元素在不同的BFC中，就能避免外边距折叠
      * BFC包含浮动时，设置把父容器设置成BFC，容器的高度会被正常撑开，容器就会进入正常的文档流中
      * 使用BFC避免文字环绕
      * BFC不会重叠浮动元素      

## 6、@font-face是什么      
         @font-face {
           font-family: 'example';
           src: url(example.ttf);
           font-style: normal;
           font-weight: normal;
           unicode-range: U+0025-00FF;
           font-variant: small-caps;
           font-stretch: expanded;
           font-feature-settings："liga1" on;
         }          
  1. 字体格式有这些：TrueType、Embedded Open Type 、OpenType、WOFF 、SVG
  2. TrueType：Windows和Mac系统最常用的字体格式，这类字体和矢量字体一样可以随意缩放、旋转而不必担心会出现锯齿
  3. EOT（Embedded Open Type）是嵌入式字体，是微软开发的技术
  4. OpenType 是微软和Adobe共同开发的字体，致力于替代TrueType字体
  5. WOFF（Web开发字体格式）是一种专门为了Web而设计的字体格式标准，实际上是对于TrueType/OpenType等字体格式的封装，每个字体文件中含有字体以及针对字体的元数据（Metadata），字体文件被压缩，以便于网络传输
  6. SVG 是由W3C制定的开放标准的图形格式
  7. IE6,7,8 仅支持 Embedded OpenType(.eot) 格式 
  8. src 外链字体资源时，遵循同源策略
  9. Firefox、Chrome、Safari 以及 Opera 支持 .ttf (True Type Fonts) 和 .otf (OpenType Fonts) 类型的字体
  10. IE 8 以及更早的版本不支持新的 @font-face 规则
  11. IE 9+ 支持新的 @font-face 规则，但是仅支持 .eot 类型的字体 (Embedded OpenType)

## 7、SVG是什么
  1. SVG（Scalable Vector Graphics）是可缩放矢量图形的缩写，基于可扩展标记语言XML来描述二维矢量图形的一种图形格式，由W3C制定，是一个开放标准
  2. 优点： 
        * 和PNG、GIF比较起来，文件体积更小，且可压缩性强；
        * 由于采用XML描述，可以轻易的被读取和修改，描述性更强；
        * 在放大或改变尺寸的情况下其图形质量不会有所损失，与分辨率无关，是可伸缩的；
        * SVG是面向未来 (W3C 标准)的，同时浏览器兼容性好；
        * 使用CSS 和 JS能很方便的进行控制，同时可以很轻易地描述路径动画   
  3. 与canvas是区别：
        * Canvas基于像素，提供2D绘制函数，是一种HTML元素类型，依赖于HTML，只能通过脚本来绘制图形
        * Canvas提供的功能比较原始，适合像素处理，动态渲染和大数据量绘制的应用场景     
        * SVG为矢量，提供一系列图形元素（Rect, Path, Circle, Line …），还有完整的动画，事件机制，本身可以独立使用，也可以嵌入到HTML中
        * SVG很早就成为了国际标准，功能更完善，适合静态图片展示，高保真文档查看和打印的应用场景 
  4. SVG中提供了很多基础元素可以用来绘制基础的形状，譬如矩形、圆形、椭圆、多边形、折线、线条、路径等，同时可以将这些基础形状组合绘制出复杂的图像
  5. 有4种常用的方式加载SVG  
        * img标签
           ``` 
           <img src="tw93.svg" alt="Hello SVG" height="65" width="68"> 
           ```       
        * CSS background   
            ```
            .logo {
              background: url("data:image/svg+xml;base64,[data]");
            }
            ```
        * 通过object
           ```
           <object type="image/svg+xml" data="data:image/svg+xml;base64,[data]">
              fallback
            </object>
            ```
        * 直接内嵌到HTML
            ```
            svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65">
              <path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
              <path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
            </svg>
            ```      

## 8、HTTP是什么
  1. HTTP 全称是Hypertext Transfer Protocol，本质上是一种协议，即超文本传输协议。
  2. HTTP是一种无状态协议，每次请求都是独立的，当需要进行保存用户登录状态时，一般使用Cookie来保存状态，Cookie会根据服务器端发送的响应报文内的一个叫做Set-Cookie的首部字段，通知客户端保存Cookie（保存在自己的电脑里），当下次客户端发送请求时，Cookie值会被添加到请求报文中发送出去。
  3. 版本对比：
     * HTTP/0.9、HTTP/1.0  
    为非持久连接，每次连接只处理一个请求，完成请求即断开连接，采用这种方式可以节省传输时间；无请求头跟响应头，客户端的前后请求是同步的，类似多线程的同步机制。  
     * HTTP/1.1 
    默认为持久连接（即默认开启了Connection:keep-alive），在一次TCP连接里可以处理多次HTTP请求，但Keep-Alive不会永久保持连接，它有一个保持时间；客户端不同请求之间是异步的，类似多线程的异步处理；HTTP是基于TCP连接的，持久连接可以节省TCP三次握手的时间。 
     * HTTP/2.0
    HTTP/2 采用二进制格式传输数据，而非 HTTP/1.x 的文本格式  <br>
    单一长连接：只会创建一条TCP连接，即使这页面可能包含上百个资源，减少TCP握手带来的时延；<br>
    多路复用：虽然只有一条TCP连接，但逻辑上分成了很多stream，把要传输的信息分割成一个个二进制帧；<br>
    头部压缩；    <br>
    服务端推送；
  4. HTTP 请求组成部分:请求行、请求头、请求正文
     * 请求行：方法、URL、协议/版本
  5. HTTP 响应组成部分:状态行、消息报头、响应正文
     * 状态行：状态码、原因短语、协议/版本
  6. 状态码
     * 301 永久转移，一般新老网站更替时使用
     * 302 Found 资源暂时转移，很多短链接跳转长链接就是使用的302
     * 304 Not Modified 没有修改 ，可以通过文件的哈希值etag，也可以根据Last Modified Time（文件的修改时间）
     * 400 Bad Request 请求无效，当必要参数缺失、参数格式不对时，后端通常会返回400
     * 403 Forbidden 拒绝服务 ，服务能够理解你的请求，包括传参正确，但是拒绝提供服务
     * 401 没有认证，需要登陆验证
     * 500 内部服务器错误，如业务代码出现了异常没有捕获，被tomcat捕获了，就会返回500错误，而当服务彻底挂了，连返回都没有的时候，那么就是502了
     * 502 Bad Gateway 网关错误  收到请求了，但请求没有给到业务服务
     * 503 Service unavailable 服务不可用
     * 504 Gateway Timeout 网关超时  通常是因为服务处理请求太久，导致超时
  7. 请求的编码方式
     * application/www-x-form-urlencoded 最常用的一种，适用于GET/POST等
     * application/json 常见于请求响应的数据格式
     * multipart/form-data 通常用于上传文件
  8. get和post区别
     * GET请求把参数放到URL中，POST把参数放在报文体中，至于大小限制，是浏览器和系统约束的，HTTP协议并没有限制URI的长度。
     * 本质上GET/POST是一样的，只是数据放置的位置不同，但get把数据放在URL中，涉及敏感信息时可能会泄露，但这只是相对的不安全，用抓包工具同样可以拿到post的数据。
     * GET的语义是请求获取指定的资源，POST的语义是根据请求负荷（报文主体）对指定的资源做出处理。
     * GET方法是安全、幂等、可缓存的（除非有 Cache-Control Header的约束）,GET方法的报文主体没有任何语义。
     * POST不安全，不幂等，（大部分实现）不可缓存，这也是浏览器在后退/刷新时遇到POST会给用户提示的原因。
     * GET 只允许 ASCII 字符；POST 没有限制，也允许二进制数据。
     * GET 可收藏为书签，参数保留在浏览器历史中；POST 不可收藏为书签，参数不会保存在浏览器历史中。

## 9、TCP/IP协议族
1. TCP/IP协议族就采用了分层的思想，自上而下分成了四层： 应用层，传输层，网络层，链路层，每一层的协议只约定了特定的功能。
2. HTTP、FTP、DNS位于应用层，TCP、UDP位于传输层，IP位于网络层。
   * DNS 提供域名到IP地址之间的解析服务
   * TCP属于传输层，提供可靠的字节流服务，TCP 协议为了更容易传送大数据才把数据分割，而且 TCP 协议能够确认数据最终是否送达到对方
4. 发送端发送请求时，数据从上往下走；接收端接收数据时，数据从下往上走。

## 10、web安全和漏洞

## 11、web性能优化

## 12、浏览器兼容性问题

## 13、常用WEB开发调试工具

## 14、socket是什么

## 15、原生常用功能

## 16、react，vue，jQuery, YUI 

## 17、框架设计

## 18、Ajax

## 19、小程序开发

## 20、公众号开发

## 21、数据库常见问题

## 22、开发流程与构建工具grunt、gulp、webpack

## 23、sass/less

## 24、正则

## 25、js设计模式

## 26、原型与继承

## 27、闭包

## 28、AMD、CommonJS、ReqireJS

## 29、排序算法

## 30、数组去重

## 31、如何判断数据类型

## 32、对象的浅复制与深复制

## 33、git常见用法

## 34、模块化和组件化的区别

## 35、实现动画有哪几种方法，它们之间的区别

## 36、jQuery常见方法的源码实现

## 37、NodeJS基础问题

## 38、如何跨域，它们之间有何不同

## 39、viewport是什么

## 40、盒子模型是什么

## 41、H5新增了哪些特性

## 42、响应式布局

## 43、CSS3有哪些属性

## 44、浏览器存储有哪些

## 45、列举js异步编程的方法

## 46、vue组件中的data为什么必须是函数
1. 引用类型数据指向同一个内存地址。
2. 用函数来返回数据，避免引用类型的变量共享数据，同时保证每个组件的Data独立。

## 47、VUE中组件是如何通信的
1. 父组件向子组件通信
   * 使用props，父组件可以使用props向子组件传递数据。
   * 使用$children可以在父组件中访问子组件。
2. 子组件向父组件通信
   * 使用vue事件，父组件向子组件传递事件方法，子组件通过$emit触发这个事件方法，回调给父组件。
   * 使用$parent可以访问父组件的数据。
   * 通过修改父组件传递的props来修改父组件数据，但是并不推荐直接修改props的值，因为如果props是一个对象或数组，在子组件内部改变它会影响父组件的状态,避免应用的数据流变得难以理解,如果子组件要处理props,可以用本地变量存储或者设置计算属性。另外，如果数据是用于显示修改的，在实际开发中建议将其放入data中，在需要回传给父组件的时候再用事件回传数据。这样做保持了组件独立以及解耦，不会因为使用同一份数据而导致数据流异常混乱，只通过特定的接口传递数据来达到修改数据的目的，而内部数据状态由专门的data负责管理。
3. 非父子组件、兄弟组件之间的数据传递
   * Vue官方推荐使用一个Vue实例作为中央事件总线，组件各自引入中央总线，用$on方法在一个组件中监听一个事件，用$emit在另一个组件中触发事件。
   * 复杂的单页应用数据管理，建议使用vuex进行状态管理。

## 48、Vue数据双向绑定的原理
1. Vue.js的响应式原理依赖于Object.defineProperty，这也是Vue.js不支持IE8以及更低版本浏览器的原因。Vue通过设定对象属性的 setter/getter方法来监听数据的变化，通过getter进行依赖收集，而每个setter方法就是一个观察者，在数据变更的时候通知订阅者更新视图。
2. 其实Watcher与data可以看成一种被绑定的状态（实际上是data的闭包中有一个Deps订阅着，在修改的时候会通知所有的Watcher观察者），在data发生变化的时候会触发它的setter，setter通知Watcher，Watcher进行回调通知组件重新渲染的函数，之后根据diff算法来决定是否发生视图的更新。

## 49、VUE实例事件接口和浏览器的事件接口有何不同

## 50、JavaScript的数据类型都有什么
1. 基本(原始)数据类型：String,Boolean,Number,Undefined, Null
2. 引用数据类型：Object(Array,Date,RegExp,Function,Math,JSON,Arguments,Object)
3. 检查数据类型的方法：
   * typeof
   ```
   typeof 'sun'        === 'string'
   typeof true         === 'boolean'
   typeof 12           === 'number'
   typeof undefined    === 'undefined'
   typeof null         === 'object'
   typeof function(){} === 'function'
   typeof []           === 'object'
   typeof Math         === 'object'
   typeof new Date()   === 'object'
   typeof new RegExp() === 'object'
   typeof JSON         === 'object'
   typeof new Object() === 'object'
   ```
   注意：typeof 可以判断出一个函数和基本类型（除开null），但是判断不出一个数组；另外，比较特别的是 typeof null 返回的是 object，因为历史原因，null 表示还没指向具体内存地址，而 undefined 则表示变量还没有值。

   * instanceof
   ```
   [] instanceof Array === true 
   ```
   注意：不同window或iframe之间的对象类型检测不能使用 instanceof 

   * Object.prototype.toString（返回的是[[class]]属性）
   ```
   Object.prototype.toString.call('sun')          === '[object String]' 
   Object.prototype.toString.call(true)           === '[object Boolean]' 
   Object.prototype.toString.call(12)             === '[object Number]' 
   Object.prototype.toString.call(undefined)      === '[object Undefined]' 
   Object.prototype.toString.call(null)           === '[object Null]' 
   Object.prototype.toString.call([])             === '[object Array]' 
   Object.prototype.toString.call(function(){}{}) === '[object Function]' 
   Object.prototype.toString.call(new Date())     === '[object Date]' 
   Object.prototype.toString.call(Math)           === '[object Math]' 
   Object.prototype.toString.call(new RegExp())   === '[object RegExp]' 
   Object.prototype.toString.call(JSON)           === '[object JSON]'
   Object.prototype.toString.call(new Object())   === '[object Object]'
   ```
   注意：对于null 和 undefined ，在IE6/7/8中用 Object.prototype.toString.call() 检测返回 '[object Object]'

   * constructor
   ```
   ('sun').constructor === String
   (true).constructor === Boolean
   (12).constructor === Number
   (undefined).constructor //不能读这个属性
   (null).constructor      //不能读这个属性
   ([]).constructor === Array
   (function(){}).constructor === Function
   (new Date()).constructor === Date
   (Math).constructor === Object  //注意，这里返回对象构造函数，并不是Math
   (new RegExp()).constructor === RegExp
   ```

## 51、Object.prototype.toString 原理
   1. 在ECMAScript 5中，Object.prototype.toString()被调用时，会进行如下步骤： 
    - 如果 this是undefined ，返回 [object Undefined] ； 
    - 如果 this是null ， 返回 [object Null] ； 
    - 令 O 为以 this 作为参数调用 ToObject 的结果； 
    - 令 class 为 O 的内部属性 [[Class]] 的值； 
    - 返回三个字符串 "[object", class, 以及"]" 拼接而成的字符串。    
   2. ES5 规范
   * 本规范的每种内置对象都定义了 [[Class]] 内部属性的值。宿主对象的 [[Class]] 内部属性的值可以是除了 "Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", "String" 的任何字符串。[[Class]] 内部属性的值用于内部区分对象的种类。注，本规范中除了通过 Object.prototype.toString ( 见 15.2.4.2) 没有提供任何手段使程序访问此值。
   3. ES6 规范
   * 在ES6里，之前的 [[Class]] 不再使用，取而代之的是一系列的 internal slot, 返回由三个字符串 "[object", tag, and "]" 拼接而成的一个字符串。
