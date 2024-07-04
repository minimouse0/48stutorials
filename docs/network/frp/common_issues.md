# frp常见问题
## i/o deadline reached
**你的网络环境中的每个网关都可能被人刻意地设置了过滤frp流量的机制**  
1. 在frpc的配置文件中加上`tls-enable=true`，这是让frp的流量加密，防止被网关探测到（部分内网穿透服务商要求尽可能在其管理面板修改配置，这个选项的名字可能是数据加密，tls等）
2. 使用kcp协议连接：
   在frps配置文件加入`kcp_bind_port=你想要作为frps端口的端口号`，之后记得重启frps
   在frpc配置文件加入`protocol=kcp`，之后记得重启frpc
   一些网关只检测tcp流量不检测udp，那就用kcp（基于udp）试试
   [来源](https://blog.csdn.net/qq_37400312/article/details/135563615)
