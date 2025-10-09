# 常见问题
## 怎么转到脚本文件所在目录？

### cmd
```
cd /d %~dp0
```
> [!WARNING]
> powershell下此命令不适用

### powershell

```
cd $PSScriptRoot
```

## cmd脚本中执行cmd脚本时，内层cmd脚本结束时外层脚本被直接终止，不继续运行
cmd脚本在其中执行另一个脚本时用`CALL`命令
```
CALL .\脚本.bat
```
