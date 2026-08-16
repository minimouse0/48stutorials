# 常见问题

## pm2设置开机自启

如果你用的是windows系统，还需要执行以下步骤：

1. 以管理员身份打开 CMD 或 PowerShell
2. 全局安装自启工具`npm install pm2-windows-startup -g`
3. 安装 Windows 服务 `pm2-startup install`

然后对于所有操作系统，继续执行以下命令
```
pm2 save
```
如果是windows系统，那么此时已经操作完毕  
如果是类unix系统（macos、linux、freebsd），再执行以下命令：
```
pm2 startup
```
### 取消开机自启
对于类unix系统：
```
pm2 unstartup
```
windows取消开机自启方式待补充
