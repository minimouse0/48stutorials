# powershell操作防火墙

## 直接允许一个程序通过防火墙

```
New-NetFirewallRule -Name "你想给这个规则起的名字" `
  -DisplayName "这个规则的备注" `
  -Program "程序的绝对路径" `
  -Direction Inbound `
  -Action Allow `
  -Profile Any `
  -Enabled True
```

## 删除一个规则

```
New-NetFirewallRule -Name "规则名" 
```
