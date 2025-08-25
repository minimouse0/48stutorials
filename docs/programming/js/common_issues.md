# 常见问题
## 可变参数怎么写？
怎么样让我的函数能传入数量不固定的参数，然后函数能自动识别？比如我可以传入`(a,b,c)`，也可以传入`(1,2)`？  
### `Rest`语法
可以使用`rest`语法来实现，写法是`...参数名`。  
比如可以这么写：
```js
function log(arg1,...args){
}
```
此时用语句`log(1,2,3,4,5)`调用函数，函数的`args`参数接收到的值为：`[2,3,4,5]`。  
### `arguments`关键字
除此之外，使用[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)关键字也可实现。  
说白了，arguments就是个数组，例如你可以这样写；  
```js
function a(){
    console.log(arguments[0]);
}
```
别看这个函数看起来没有接收任何参数，如果你这么调用：
```js
a("1919810")
```
那么你将会看到如下输出：
```
1919810
```
无论函数有没有指定接收什么参数，arguments对应的数组都会包含传入所有的参数。比如向一个函数传入这样的参数：
```js
a(1,"a",true,null,undefined);
```
那么这个函数的函数体得到的arguments长成这样：
```js
[1,"a",true,null,undefined]
```
## 函数/方法重载怎么写

## 怎么给有可变参数函数传不固定的参数？
比如说我要对一个叫`log`的函数进行处理，这个函数的参数是`log(...args)`，然后现在我想在前面套一层别的函数，但是还是想接收可变参数然后把可变参数传进这个函数  
使用js的展开语法（`spread`）即可实现。比如通过可变参数接收到了`args`这个数组，那么可以这么把这个数组传入log函数中：  
```js
log(...args)
```
像接收可变参数一样，直接写上...变量名即可。比如有下面这些代码：
```js
function log(arg1,...args){
}
log(...[1,2,3,4,5));
```
那么此时`log`的`args`接收到的值是：`[2,3,4,5]`。  

## 怎么判断一个字符串中是否包含一个字符串片段（子字符串）

在 JavaScript 中判断一个字符串是否包含某个子字符串，有几种常用方法，下面是最推荐的几种：

### ✅ 方法一：`includes()`（最直观）

```js
const str = "Hello, world!";
const result = str.includes("world"); // true
```

- 返回值是布尔类型：`true` 表示包含，`false` 表示不包含。
- 区分大小写。
- ES6 语法，现代浏览器都支持。

### ✅ 方法二：`indexOf()`（兼容性更好）

```js
const str = "Hello, world!";
const result = str.indexOf("world") !== -1; // true
```

- 如果找不到子字符串，返回 `-1`。
- 适用于老版本浏览器。
- 同样区分大小写。

### ✅ 方法三：使用正则表达式（更灵活）

```js
const str = "Hello, world!";
const result = /world/.test(str); // true
```

- 可以做更复杂的匹配，比如忽略大小写：`/world/i`
- 适合需要模式匹配的场景。

### 🧠 小贴士

- 如果你只需要简单判断，`includes()` 是最推荐的方式。
- 如果你需要兼容旧环境，比如 IE，建议用 `indexOf()`。
- 如果你要做复杂匹配，比如判断是否包含某种格式，可以用正则。
