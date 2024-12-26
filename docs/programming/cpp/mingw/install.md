# 安装MinGW
## [Windows](https://blog.csdn.net/qq_44918090/article/details/132190274)
首先前往https://sourceforge.net/projects/mingw-w64/files/Toolchains%20targetting%20Win64/Personal%20Builds/mingw-builds/  
选择要安装的版本，自己没有额外要求就选择最新版  
进入threads-win32  
选择seh  
里面一般只有一个文件  
下载好解压，如果电脑解压不了就安装一个7z  
然后把里面的mingw64文件夹放到C:/Progeam Files,或者是电脑上其他用于安装软件的文件夹  
编辑windows环境变量，新建系统变量，变量名MinGW_HOME,值为你的mingw64文件夹路径  
编辑Path变量，新建一行，内容为刚刚的mingw64文件夹路径加上一个\bin  
cmd在任意位置执行gcc -v验证安装  
