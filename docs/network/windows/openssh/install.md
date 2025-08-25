# 在windows上安装和启用openssh

```powershell
#安装
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
#安装完成后，启动并设置 SSH 服务为自动启动
Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'
#允许 sshd.exe 通过防火墙
New-NetFirewallRule -Name "AllowSSHD" `
  -DisplayName "Allow OpenSSH Server" `
  -Program "C:\Windows\System32\OpenSSH\sshd.exe" `
  -Direction Inbound `
  -Action Allow `
  -Profile Any `
  -Enabled True
```
