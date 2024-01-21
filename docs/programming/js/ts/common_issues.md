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
