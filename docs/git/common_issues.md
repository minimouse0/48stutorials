# Git常见报错或问题
## SSL certificate problem: unable to get local issuer certificate
Git认为远程服务器的证书不可信，在命令行输入`git config --global http.sslVerify false`之后再执行一次报错的命令即可
## [怎么删除本地分支](https://www.freecodecamp.org/chinese/news/how-to-delete-a-git-branch-both-locally-and-remotely/)
## 怎么配置socks5代理
执行命令`git config --global http.proxy 'socks5://你的socks5代理服务器地址'`  
比如用clash代理GitHub，clash的默认端口是7890，就执行`git config --global http.proxy 'socks5://[::1]:7890'`。记得在clash里勾上允许局域网连接，否则连不上
