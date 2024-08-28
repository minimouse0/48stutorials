# 常见问题
## [如何清除DNS缓存](https://zhuanlan.zhihu.com/p/586645355)
## [如何批量删除.DS_Store文件](https://www.cnblogs.com/Flat-White/p/17027970.html)
省流：
```
# 删除当前目录及所有子目录所有.DS_Store文件
find . -name ".DS_Store" -type f -delete
```
## [如何批量删除._开头的文件](https://www.cnblogs.com/Flat-White/p/17027970.html)
省流：
```
# 删除当前目录及所有子目录所有.DS_Store文件以及“._”开头文件
find . -name "._*" -delete
```
## [如何去除app包的quarantine属性](https://www.bing.com/ck/a?!&&p=dac4029339a88d7bJmltdHM9MTcyNDgwMzIwMCZpZ3VpZD0xZmRiNTEyMy05MTY3LTZmODEtMDY1OC00NTk1OTBiZTZlMTYmaW5zaWQ9NTQxMQ&ptn=3&ver=2&hsh=3&fclid=1fdb5123-9167-6f81-0658-459590be6e16&u=a1aHR0cHM6Ly96aHVhbmxhbi56aGlodS5jb20vcC82MTE0NzExOTIjOn46dGV4dD0lRTUlQTYlODIlRTQlQkQlOTUlRTglQTclQTMlRTklOTklQTRRdWFyYW50aW5lJUU1JUIxJTlFJUU2JTgwJUE3JUU1JTkxJUEyJUVGJUJDJTlGJTIwJUU2JTg5JTkzJUU1JUJDJTgwJUU1JUFFJTlFJUU3JTk0JUE4JUU1JUI3JUE1JUU1JTg1JUI3JUU5JTg3JThDJUU3JTlBJTg0JUUzJTgwJTkwJUU3JUJCJTg4JUU3JUFCJUFGJUUzJTgwJTkxJUVGJUJDJThDJUU1JTlDJUE4JUU3JUJCJTg4JUU3JUFCJUFGJUU1JUE0JThEJUU1JTg4JUI2JUU3JUIyJTk4JUU4JUI0JUI0JUU4JUJFJTkzJUU1JTg1JUE1JUU0JUI4JThCJUU5JTlEJUEyJUU3JTlBJTg0JUU1JTkxJUJEJUU0JUJCJUE0JUVGJUJDJTlBJTIwc3Vkbyx4YXR0ciUyMC1yJTIwLWQlMjBjb20uYXBwbGUucXVhcmFudGluZSUyQiVFNyVBOSVCQSVFNiVBMCVCQyUyQiVFNSU5QyVBOCVFNSVCQSU5NCVFNyU5NCVBOCVFNyVBOCU4QiVFNSVCQSU4RiVFNCVCOCVBRCVFNiU4OSVCRSVFNSU4OCVCMEFwcCVFNiU4QiU5NiVFNSU4NSVBNSVFNyVCQiU4OCVFNyVBQiVBRiVFOSU4NyU4QyVFOSU5RCVBMiVFNSU4RCVCMyVFNSU4RiVBRiVFRiVCQyU4OCVFNiVCMyVBOCVFNiU4NCU4RiVFRiVCQyU5QSVFOCVCRSU5MyVFNSU4NSVBNSVFNCVCQiVBMyVFNyVBMCU4MSVFNCVCOCVBRCVFNCVCOCU4RCVFOCVBNiU4MSVFNSVCOCVBNiVFNSU4QSVBMCVFNSU4RiVCNyVFRiVCQyU4OQ&ntb=1)
macOS可以使用以下命令移除指定app的quarantine属性：
```
sudo xattr -r -d com.apple.quarantine app路径
```
例如如今有一个叫LauncherX.Avalonia的app，我已经把它放在了Applications文件夹里，结果启动时提示我未知开发者应该放进回收站，那么可以进行以下操作：  
1. 启动终端app
2. 输入命令。对于app路径有以下两种办法可以获取：
   - 在Finder中进入Applications文件夹，找到LauncherX.Avalonia，按住option并右键点击app文件，在菜单中选择**将“LauncherX.Avalonia”拷贝为路径名称**，之后在命令行里直接粘贴即可。
   - 在Finder中进入Applications文件夹，找到LauncherX.Avalonia，直接将它拖进命令行中
   注意在输入应用路径前确保已经在最后一个参数`com.apple.quarantine`后面加了一个空格，否则路径输入进命令行之后和前面的参数连在一起，无法识别，执行失败。
