# 常见问题
## 使用ts编译出的插件报错org.graalvm.polyglot.PolyglotException: ReferenceError: "exports" is not defined
这个报错来自main函数的导出，把tsconfig里面的compilerOptions.target改成es的就可以了
