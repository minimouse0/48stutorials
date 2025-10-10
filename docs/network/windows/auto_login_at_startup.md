# 开机时无需密码直接登录

首先按照[这个教程](https://blog.csdn.net/yyyxsam/article/details/122584922)操作  
之后**还没完**，还需要按照[这个教程](https://blog.csdn.net/xiaojin21cen/article/details/124221504)或[这个教程](https://www.tree666.com/post/60.html)操作，否则电脑可能会仅登录而不进行开机自启

## 无图形界面Windows Server

不能按照以上方法，需要用这些命令：
```
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v AutoAdminLogon /t REG_SZ /d 1 /f
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v DefaultUsername /t REG_SZ /d <要自动登录到的帐户名> /f
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon" /v DefaultPassword /t REG_SZ /d <这个帐户的密码> /f
```
> [!WARNING]
> 这个方法会把密码在注册表中明文储存，如果主机位于机房或单位等公共场所，或者主机上有软件漏洞让攻击者能无需密码读取注册表，那别人就能获取到这台电脑的开机密码
