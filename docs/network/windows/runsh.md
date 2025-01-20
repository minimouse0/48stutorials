# 运行.sh脚本
Windows原生不支持运行shell脚本，但是git可以实现这个功能，git内置了bash，通过这个bash就可以运行了。
## 通过图形界面运行
1. 在文件资源管理器中进入你的.sh脚本所在文件夹
2. 鼠标右键空白处，选择git bash here
3. 执行`sh <你的脚本名>`
## 通过命令行运行
1. 找到你的Git安装目录中的git.exe的可执行文件位置，一般位于`C:\Program Files\Git\bin`，你可以直接进入这个路径确认一下，这里十有八九除了git.exe之外还有一个bash.exe
2. 执行命令
对于cmd：
```cmd
"<git.exe所在路径>\bash.exe" <你的脚本名>
:例如 "C:\Program Files\Git\bin\bash.exe" acme.sh
```
对于powershell：
```powershell
& "<git.exe所在路径>\bash.exe" <你的脚本名>
#例如 & "C:\Program Files\Git\bin\bash.exe" acme.sh
```
