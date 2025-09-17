# 环境变量

## 如何设置
通常情况下使用以下命令进行暂时性的设置：
```
$env:变量名="变量值"
```

如果是永久设置，比如新安装了一个命令行工具，那么使用以下命令进行永久性的修改：
```powershell
[Environment]::SetEnvironmentVariable("变量名", "变量的值", "如果为当前用户设置写User，为整个系统设置就是Machine");
```
比如你要给一个命令行工具设置，那么使用以下命令：
```powershell
[Environment]::SetEnvironmentVariable("Path", $Env:Path + ";C:\Go\bin", "User")
```
