# 常见问题
## 可变参数怎么写？
怎么样让我的函数能传入数量不固定的参数，然后函数能自动识别？比如我可以传入(a,b,c)，也可以传入(1,2)？  
使用[arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)关键字即可实现。  
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
