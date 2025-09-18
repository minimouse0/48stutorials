# 常见问题
## 怎么一次性删除/复制/移动多个文件
将需要操作的文件名写成`@("文件1","文件2",...)`，比如：
```powershell
rm @("文件1","文件2",...)
```
```
## 无法加载文件 xxx.ps1，因为在此系统上禁止运行脚本。
执行
```powershell
 Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```
## 表达式或语句中包含意外的标记“ ”
分为多种情况
1. 试图将指定路径中的指定可执行文件在当前目录下执行，但是采用的是cmd的命令语法
powershell如果要实现这个，需要在前面加上&，例如：
```shell
:cmd命令
"C:\Program Files\Java\jdk-17.0.3.1\bin\java.exe" --version
```
在powershell中需要改成：
```shell
& "C:\Program Files\Java\jdk-17.0.3.1\bin\java.exe" --version
```
