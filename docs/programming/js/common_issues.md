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
