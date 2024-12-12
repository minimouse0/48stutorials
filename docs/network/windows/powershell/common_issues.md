# 常见问题
## 无法加载文件 xxx.ps1，因为在此系统上禁止运行脚本。
执行
```powershell
 Set-ExecutionPolicy Unrestricted -Scope CurrentUser
```
