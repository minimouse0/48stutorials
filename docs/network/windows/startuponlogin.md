# 登录时启动

1. 为你要启动的程序（exe或bat）的文件创建快捷方式
2. 剪切这个快捷方式
3. 在文件资源管理器地址栏输入`shell:startup`回车
4. 在转到的文件夹里粘贴

## 无图形界面Windows Server

无图形界面Windows Server不能用以上方法，只能用任务计划程序
```
schtasks /create /tn "计划名" /tr "要启动的程序的绝对路径" /sc onlogon /ru 用户名 /rp 密码
```
随后如果要删除：
```
schtasks /delete "计划名"
```
