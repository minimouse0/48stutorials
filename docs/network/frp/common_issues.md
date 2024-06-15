# frp常见问题
##  i/o deadline reached
在客户端的配置文件`frpc.ini`中加入一条配置`tls_enable = true`（部分内网穿透服务商要求尽可能在其管理面板修改配置，这个选项的名字可能是数据加密，tls等）
