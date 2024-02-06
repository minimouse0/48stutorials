# 更改计算机上的远程桌面的侦听端口
[原文](https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/clients/change-listening-port)，如果在这个教程里有的操作步骤失效了，可以来翻原文  
1. win+r输入`regedit`回车，打开注册表
2. 顶部输入`HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp`回车
3. 按ctrl+f，输入`PortNumber`，回车，之后应该会把你直接定位到PortNumber这项上
4. 右键菜单点修改，基数选择十进制，接下来在左边填入你要改到的端口号，点确定
5. 之后重启电脑即可
> [!WARNING]
> 因为更改了端口号，后续用rdp重新连接这个电脑的时候，需要用新的端口号
