# 开启密钥登录

## 生成密钥

首先需要在客户端上生成密钥。如果已经有的话，就不要生成了。要检查自己以前是否生成过密钥，可以执行以下命令查看：
```
ls -al ~/.ssh
```
如果该命令的输出中包含名为 id_rsa（私钥）和 id_rsa.pub（公钥），或id_ed25519（私钥）和id_ed25519.pub（公钥）的文件，则表示您已存在SSH 密钥对。

如果密钥对文件中包含`rsa`，那它就是rsa密钥，如果包含`ed25519`，那它就是ed25519密钥。请尽量记住当前设备上的密钥类型，这对后续你上传密钥和进行连接时的随机应变十分有用。

如果你还没有密钥，可以使用以下命令生成：

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```
ed25519 是一种更现代、更安全的密钥类型，推荐优先使用。如果你需要兼容旧系统，可以使用 rsa。

## 将公钥复制到 Windows Server

在本地执行以下命令，在本地显示你的公钥：
```
cat ~/.ssh/id_<密钥类型>.pub
```

然后所有的命令执行结果就是你的公钥，例如我自己的公钥是这样的：
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAA*************************/KAIN4zVZyfG8xs1L0f administrator@CHUNITHM
```

然后在 Windows Server 上执行：
```powershell
#创建ssh对当前用户的存储密钥的目录
mkdir $env:USERPROFILE\.ssh
#写入你的密钥
[System.IO.File]::WriteAllText("$env:USERPROFILE\.ssh\authorized_keys", "你的公钥，翻到上面找你连接ssh之前cat命令的执行结果，整个复制到这里", ($encoding = New-Object System.Text.UTF8Encoding $false))
```

## 修改ssh配置文件以允许密钥登录

使用文本编辑器打开`C:\ProgramData\ssh\sshd_config`，确保以下配置项没有被注释（没有 #）：
```
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

```
如果 `C:\ProgramData\ssh\sshd_config` 文件不存在，可以从 `C:\Windows\System32\OpenSSH\sshd_config_default` 复制一份过来：

```
Copy-Item -Path "C:\Windows\System32\OpenSSH\sshd_config_default" -Destination "C:\ProgramData\ssh\sshd_config"
```

修改并保存文件后，重启ssh服务：`Restart-Service sshd`

别担心，ssh有特殊机制，重启 SSH 服务后，当前连接不会立即断开，但新配置只会在下次连接时生效。建议你保持当前会话，另开一个终端测试密钥登录是否成功。


