# 常见问题
## `apt update`提示`404  Not Found`
有两种可能性：
1. 软件包在官方软件包列表中没有，需要配置从额外的PPA下载
2. 当前版本的Ubuntu已经停止支持，但是源仍然使用的是`archive.ubuntu.com`，把所有的`archive`换成`old-releases`，换完源再`sudo apt update`

## `An upgrade from ' ' to ' ' is not supported with this tool`
从一个很久以前的、已经停止支持的版本直接升级（使用`sudo do-release-upgrade`）容易导致这个问题，除了直接重装系统外，你还可以试着按照以下步骤操作（教程来自 https://unix.stackexchange.com/questions/767795/upgrading-ubuntu-server-22-10-kinetic-kudu-to-23-10-mantic ）：
1. 编辑`/etc/apt/sources.list`或`etc/apt/sources.list.d/ubuntu.sources`，把所有的`archive`换成`old-releases`
2. 依次执行以下命令：
```
sudo apt update
sudo apt upgrade
suto apt dist-upgrade
reboot
```
3. 电脑重启之后，继续编辑`/etc/apt/sources.list`或`etc/apt/sources.list.d/ubuntu.sources`，把所有的`old-releases`换回`archive`，然后再把里面的所有的版本代号换成最新版的版本代号，比如22.10是kinetic，24.10是oracular，那就把kinetic换成oracular

## VMware Workstation虚拟机进桌面黑屏
进入虚拟机设置，硬件，显示器，有一个加速3D图形，如果是勾上的把它去掉，如果是去掉的把它勾上，然后再试试
## `Oh no! Something went wrong!`
在手机或其他电脑上连接到电脑的ssh，或者按Ctrl+Alt+F3进入TTY模式  
先执行这些命令
```
sudo apt-get update && sudo apt-get dist-upgrade
sudo apt-get clean && sudo apt-get autoremove && sudo reboot
```
重启之后如果还是不行，用apt重装gnome（桌面环境）
```
sudo apt remove gnome
sudo apt --fix-broken install
reboot
```
## 开机后紫屏，什么都不显示
分为以下几种情况
### 系统盘爆满，只剩几十MB
把系统盘插到别的支持EXT4文件系统的电脑上，或者在手机或其他电脑上连接到电脑的ssh，或者按Ctrl+Alt+F3进入TTY模式来清理硬盘，或者如果是虚拟机也可以考虑扩容  
### Wayland崩溃
[Ubuntu18启动紫屏卡死无登录框问题 - CSDN App](http://t.csdnimg.cn/IIgz1)
### 内核故障
[解决ubuntu开机紫屏的问题 - CSDN App](http://t.csdnimg.cn/F5nqJ)
