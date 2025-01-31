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
