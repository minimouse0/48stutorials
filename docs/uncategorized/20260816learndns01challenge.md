# 2026年8月16日配置了ssl证书的dns挑战但没做完最终的自动更新

今天我们就做到这吧，让我们理一下都做了什么：
1. 安装acme.sh，注意在安装命令里需要指定自己的邮箱，别用默认的example
2. 现在acme因为被zerossl赞助把默认的换成zerossl了，但不知道为什么会超时，可能是被墙了，所以，所以我们需要执行acme.sh --set-default-ca --server letsencrypt换成letsencrypt
3. 然后我使用了dns01挑战重新进行了申请：acme.sh --issue --dns dns_dp -d 231l.net，注意如果是子域名的话，要去申请通配符的：acme.sh --issue --dns dns_dp -d 231l.net -d *.231l.net
4. acme会把dnspod提供的token保存到account.conf里
5. 执行了以下4条命令  
  566  cp ~/.acme.sh/231l.net_ecc/fullchain.cer /etc/sakura231Lweb/231l.net.crt  
  568  cp ~/.acme.sh/231l.net_ecc/231l.net.key /etc/sakura231Lweb/231l.net.key  
  569  cp ~/.acme.sh/231l.net_ecc/231l.net.key /etc/sakura231Lweb/frp-cup.key  
  570  cp ~/.acme.sh/231l.net_ecc/fullchain.cer /etc/sakura231Lweb/frp-cup.crt  
6. 重启sakura的服务，刷新网站，检查证书，发现已经更新了，如果里面显示的时间比现在慢了好几个小时，但能看出来肯定是更新了因为时间虽然仍然更早但也没早太多，这是因为那个not before显示的是标准时间，不是北京时间，自己加上8小时换算一下就行了

后续还需要做的就是重做一个脚本，不但会自动更新证书，还会执行那些命令来覆盖证书，目前来看不着急，因为证书11月中旬才会过期
