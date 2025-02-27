# Git常见报错或问题
## SSL certificate problem: unable to get local issuer certificate
Git认为远程服务器的证书不可信，在命令行输入`git config --global http.sslVerify false`之后再执行一次报错的命令即可
## [怎么删除本地分支](https://www.freecodecamp.org/chinese/news/how-to-delete-a-git-branch-both-locally-and-remotely/)
## 怎么配置socks5代理
执行命令`git config --global http.proxy 'socks5://你的socks5代理服务器地址'`  
比如用clash代理GitHub，clash的默认端口是7890，就执行`git config --global http.proxy 'socks5://[::1]:7890'`。记得在clash里勾上允许局域网连接，否则连不上
## 怎么在本地显示出远程仓库刚建立的分支
执行命令：
```
git remote update origin --prune
```
## 怎么删除子模块？

cd到子模块路径，执行以下命令：
```
git rm -f <子模块文件夹名>
```

## 子模块为什么会指向仓库中一个十六进制分支？

你对git子模块的理解不够透彻。首先我们来了解git中名为签出（或叫检出）的操作。

通过签出，你可以将当前的git仓库进入一个“分离头指针”（detached HEAD）的状态，此时你工作目录中的文件会被更新到指定的提交快照。例如，`git checkout 1a2b3c4d`会让你签出对应的提交。具体来说，通过这样一个命令，你当前的目录中的状态将会是你指定的提交的状态，而不是任何一个分支的当前状态。

默认情况下，当你添加一个子模块并初始化它时，子模块会指向远程仓库的一个特定提交。这个状态类似于“分离头指针”，因为子模块的HEAD指向一个具体的提交而不是一个分支的最新提交。或者说，当你在主项目中添加子模块时，子模块会指向目标仓库的特定提交而不是最新提交。这意味着子模块的内容是固定的，不会随着目标仓库的更新而自动变化。这样设计的目的是为了确保主项目中的子模块状态是固定的，不会随目标仓库的更新而自动变化。这种固定状态有助于确保项目的一致性和可复现性，因为子模块的内容不会在没有明确更新的情况下发生变化。

这种机制虽然看起来有些繁琐，但在项目管理中起到了重要作用，确保各个子模块和主项目之间的依赖关系保持明确和一致。

如果你已经准备好要将你的子模块更新到其对应的项目的最新状态，你可以进行以下操作：

1. **进入子模块目录**：
   ```bash
   cd <submodule-path>
   ```

2. **获取目标仓库的最新变更**：
   ```bash
   git fetch
   ```

3. **检出目标仓库的最新提交**：
   ```bash
   git checkout <branch-name>
   ```
