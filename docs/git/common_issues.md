# Git常见报错或问题
##  SSL certificate problem: unable to get local issuer certificate
Git认为远程服务器的证书不可信，在命令行输入`git config --global http.sslVerify false`之后再执行一次报错的命令即可
