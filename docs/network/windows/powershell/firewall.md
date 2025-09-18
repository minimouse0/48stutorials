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

## 直接允许一个端口

```
New-NetFirewallRule -DisplayName "这个规则的备注"`
 -Direction Inbound `
 -Action Allow `
 -Protocol 协议，可以写TCP或UDP，但只能写一个，如果要都允许就得分别设置两条规则 `
 -LocalPort 端口号，可以写多个并用逗号隔开 `
 -Profile Any
```

## 删除一个规则

```
New-NetFirewallRule -Name "规则名" 
```
