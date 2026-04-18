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

## 在其他命令行中通过powershell执行一条命令，而不是直接进入powershell后再执行

也就是说，比如在bat脚本中，如果我通过powershell命令切换到powershell，那此时命令行就不再是cmd了，这种情况下cmd是把powershell当成了一个服务来运行，于是它就进入了powershell的交互界面，cmd开始等待powershell退出，在等待的过程中，它就不会继续执行脚本，直到powershell被关闭，被cmd识别到唤起的这个powershell的程序结束了运行  
比如我写了一个脚本
```cmd
echo 获取uwp应用列表
Get-AppxPackage
```
由于Get-AppxPackage不是cmd命令，这个脚本无法正常运行  
但你也不能这样写
```cmd
echo 获取uwp应用列表
powershell
Get-AppxPackage
```
这样的话，poershell会唤起powershell命令行，随后powershell就会接管运行脚本的终端，cmd此时无法使用，这是因为powershell命令会让powershell这个软件被当成一个程序被运行，cmd运行了这个程序后，必须先等待它完成，然后才能执行后续的脚本，所以你会看到脚本卡在powershell的起始界面不动了，不会自己结束，也不会继续执行，因为它根本没有进行到Get-AppxPackage命令那步，powershell命令唤起了powershell，于是cmd就在执行完这个命令后，等待powershell这个程序运行结束  
这种情况下我们就只能寄希望于不离开cmd来执行powershell命令，幸运的是，powershell可以不用进入交互模式就可以执行属于它的命令，这就是-Command参数，如果使用了powershell -Command "命令"，powershell就会在启动后，不进行交互模式，立即执行参数中的命令，然后命令执行完成后立即退出，自动将终端交还给cmd。随后，我们的脚本就可以继续执行了。  
这样一来，上述示例脚本就可以写成这样：  
```cmd
echo 获取uwp应用列表
powershell -Command "Get-AppxPackage"
echo powershell执行完了它的命令，现在终端自动回到了cmd，脚本也得以继续执行
```
