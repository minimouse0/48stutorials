# 常见问题
## vscode连接ssh时报错`Failed to connect to the remote extension host server (Error: CodeError(AsyncPipeFailed(Os { code: 2, kind: NotFound, message: "系统找不到指定的文件。" })))`


先直接用命令行连接服务器。如果命令行也连不上，那么证明ssh自身出了问题，你需要按照出现的报错对ssh进行排查

### 如果远程服务器是类unix系统：

终止残留进程（可选，但更彻底）：
```
pgrep -u $USER -f '(.vscode-server|code|node)' | xargs -r kill -9
```
这个命令会结束你名下所有与 VS Code 相关的进程。

删除服务端数据目录：
```
rm -rf ~/.vscode-server
```
错误指向的“文件找不到”，很可能就是这个目录里的文件结构错乱了。删除它是最直接的解决方式。

（可选）删除其他缓存：如果有其他相关目录，也可以一并清理。
```
rm -rf ~/.vscode-remote-containers
rm -rf ~/.vscode-server/cli/servers/*
```
根据一些用户的反馈，清理 servers 子目录下的内容也有效。

### 如果远程服务器是windows系统：
```
# 停止所有 VS Code 相关的进程
Get-Process -Name "code" -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# 删除 VS Code 服务端缓存目录
Remove-Item -Recurse -Force "$env:USERPROFILE\.vscode-server" -ErrorAction SilentlyContinue

# 如果有其他相关缓存也一并清理
Remove-Item -Recurse -Force "$env:USERPROFILE\.vscode-remote" -ErrorAction SilentlyContinue
```
