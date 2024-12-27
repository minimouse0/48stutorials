# 设置密钥登录（免密登录）
1. 在客户端上执行命令`ssh-keygen -t rsa`，随后一路回车直到出现一个矩形框并且生成结束
2. 上传公钥
    - Windows：执行命令`ssh 服务器的用户名@服务器IP或域名 “cat >> ~/.ssh/authorized_keys” < C:Users\本地用户名\.ssh\id_rsa.pub`
    - macOS/Linux：执行命令`ssh-copy-id -i ~/.ssh/id_rsa.pub user@remote_host`
  
随后在本机就可以直接通过`ssh 服务器用户名@服务器IP或域名`就可以直接登录，不需要输入密码。在其他未进行以上操作的服务器上仍然需要输入密码。  
建议将所有常用客户端设备设置了免密登录后，直接关闭服务器的密码登录以免被暴破攻击
