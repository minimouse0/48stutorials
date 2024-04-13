# 禁止Windows自动更新（普通Windows系统）
> [!WARNING]
> 不一定所有方法都可用，建议逐个尝试，直到有效为止

1.
   > Win10系统  
   > windows10永久关闭自动更新（暂停更新9999天）  
   > cmd管理员运行：  
   > `reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings" /v FlightSettingsMaxPauseDays /t reg_dword /d 9999 /f`

2. https://www.160.com/article/4727.html
