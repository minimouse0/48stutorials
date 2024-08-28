# 常见问题
## 怎么配置socks5代理
点击界面左下角齿轮，弹出菜单点击设置（Settings），右上角有一个箭头加一个文件的图标的按钮，鼠标指向它显示打开设置（JSON）（Open Settings (JSON)），里面找到`http.proxy`这个配置，如果没有就加上，值写`"socks5://你的socks5代理服务器地址"`，然后再去找`http.proxySupport`这个配置，值写`"on"`  
比如你用clash上的GitHub，clash默认端口7890，那`http.proxy`就写`"socks5://[::1]:7890"`，之后记得去clash里面把允许局域网连接打开，否则会连不上
