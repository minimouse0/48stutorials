# 获得固定IPv6地址
> [!WARNING]
> 固定IPv6地址不代表变相获得IPv6商宽，成功固定后仍然需要遵守原运营商协议

如果服务器的IPv6地址默认是动态的，有以下几种办法固定：
1. 使用命令
    - Windows cmd：打开cmd（win+r快捷键打开运行窗口，输入cmd回车），输入`netsh interface ipv6 set privacy state=disable`
