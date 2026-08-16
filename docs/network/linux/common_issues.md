# 常见问题

## Linux怎么查看系统版本（Linux查看系统版本命令）
查看系统发行版信息
```
cat /etc/os-release
```
查看系统的详细发行版名称和版本号，绝大多数现代 Linux 系统通用。
```
lsb_release -a
```
列出LSB兼容和发行版本信息，若提示未找到命令可先安装该工具。
```
cat /etc/issue
```
查看终端欢迎信息及发行版简要版本。

查看内核与硬件架构信息
```
uname -a
```
显示完整的系统内核版本、主机名和硬件架构（如 x86_64）。

```
cat /proc/version
```
查看当前正在运行的内核版本和编译信息。

## 查看服务日志

```
journalctl -u 服务名
```

## ssh服务端配置文件（sshd_config）的位置
```
/etc/ssh/sshd_config
```

## 永久放行指定端口

### Firewalld 防火墙（CentOS 7+、RHEL、Fedora 等）永久放行 TCP 端口（如 80 端口）
待补充
### Iptables 防火墙（Ubuntu、CentOS 6 及旧系统）
插入规则放行 TCP 端口（如 80 端口）
```
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
```
