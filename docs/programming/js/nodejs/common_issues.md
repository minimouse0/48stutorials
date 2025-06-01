# 常见问题
## 怎么获取当前工作目录
nodejs中有一个全局变量叫`__dirname`，例如打印当前工作目录：
```
console.log(__dirname)
```

## windows下通过子进程执行某些命令不生效
加上`{shell: true}`参数

比如
```
child_process.spawnSync("tsc",[],{shell: true})
```

## 怎么读取命令行参数？
```
process.argv
```
这个东西是一个数组，它里面存储的就是此次运行的命令行参数

通常用户输入的参数从第三个开始，例如我指定了一个参数叫`pjsk.xspf`，那么`process.argv`就是这样的：
```js
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Administrator\\index.js',
  'pjsk.xspf'
]
```
