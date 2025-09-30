# 常见问题

## 路由器后台报错``

从路由器后台打开ssh，然后进入路由器的操作系统，然后执行命令：
```
echo 512 > /proc/sys/net/netfilter/nf_conntrack_expect_max
```
