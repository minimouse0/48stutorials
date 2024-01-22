# 常见问题
## Type 'IterableIterator< >' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher
需要使用`tsconfig.json`，在tsconfig.json里加上`"downlevelIteration": true`（推荐）或者`"target": "es2015"`
```
{
    "compilerOptions": {
        "target": "es2015"
        // or
        "downlevelIteration": true
    }
}
```
[原文](https://stackoverflow.com/questions/74246843/type-iterableiteratornumber-can-only-be-iterated-through-when-using-the-d)
## 怎么样做才能允许自己写的模块里有名字和声明文件有重复的时候两者能同时使用？
比如在类型声明文件里有这样的代码：
```
declare class Player{
//详细的成员省略了
}
```
然后因为某些原因，我也想在我的模块里提供一个叫Player的变量，所以我写：
```
class Player{

}
```
这时在这个Player类中，我想去调用类型声明文件里面声明的那个Player类
```
class Player{
    toRawPlayer():Player{
        return new Player();
    {
}
```
这个时候编译就会出错，或者运行出bug。把代码放到vscode里，你会发现他提示toRawPlayer方法的返回值类型是刚刚自己声明的那个Player，不是声明文件提供的那个  
这个挺好理解的，在代码里重新定义了一个Player，那么这个Player就把声明文件里的Player覆盖了，就像变量作用域的机制那样  
如果把这个声明文件里的东西复制一份，然后我再去定义它呢  
比如：
```
let Player1=Player
class Player{
    toRawPlayer():Player{
        return new Player1();
    {
}
```
这样也不行，编译器会报错说Player在声明前使用，因为class Player那里被算成声明，直接把声明文件里的声明忽略了  
ts里面有一个东西叫命名空间，那用命名空间行不行呢，比如：  
```
namespace MyProject{
    class Player{
        toRawPlayer():Player{
            return new Player();
        {
    }
}
```
这样也不行，但是typescript里面有一个模块globalThis，可以指代公共命名空间（不在任何一个命名空间里的变量不知道是不是叫这个，我也不知道）  
```
namespace MyProject{
    class Player{
        toRawPlayer():globalThis.Player{
            return new globalThis.Player();
        {
    }
}
```
表面上看是区分开了，但是return那行仍然会报错，globalThis只有在类型上才有效，放到执行函数变量这些就不行了
而且还有一个问题，即使我不去执行任何相关的东西，这样不是本来就没有报错了吗，结果在这种模块化的项目命名空间还不能正常合并，[原因](https://zhuanlan.zhihu.com/p/679225859)  
