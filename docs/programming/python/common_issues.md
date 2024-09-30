# 常见问题
## 怎么在macOS上切换python/python3命令对应的python解释器版本？
可以通过修改环境变量解决。python的环境变量一般位于这个文件：`~/.zprofile`。  
一般推荐使用vim进行编辑。打开文件后，你可以看到有几行代码形如  
```shell
# Setting PATH for Python 3.12
# The original version is saved in .zprofile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.12/bin:${PATH}"
export PATH
```
如果你的电脑上安装过很多python版本，那么就会有很多段这样的代码。把你要使用的python版本对应的代码放到最后即可。例如以下代码代表从python3.11、3.12、3.9中选择了3.12:  
```shell
# Setting PATH for Python 3.11
# The original version is saved in .zprofile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.11/bin:${PATH}"
export PATH

# Setting PATH for Python 3.9
# The original version is saved in .zprofile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.9/bin:${PATH}"
export PATH

# Setting PATH for Python 3.12
# The original version is saved in .zprofile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.12/bin:${PATH}"
export PATH
```
