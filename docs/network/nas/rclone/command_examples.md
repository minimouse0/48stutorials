# 命令示例
```
rclone mount :webdav: --webdav-url=<webdav连接地址（带端口）> --webdav-user=<webdav用户名> --webdav-pass="<rclone格式的加密的登录密码>" <在本地要挂载到的路径，需要是一个已存在的文件夹> --vfs-cache-mode writes
```
以writes模式，将webdav挂载到本地

```
rclone mount :sftp: <在本地要挂载到的路径，需要是一个已存在的文件夹> --sftp-host=<sftp服务器主机（不能带端口）> --sftp-pass='<rclone格式的加密这的登录密码>' --vfs-cache-mode writes --sftp-port=<sftp服务器的端口>
```
以writes模式，将sftp挂载到本地
