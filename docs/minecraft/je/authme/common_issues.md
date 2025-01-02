# 常见问题
## ` Error occurred while enabling AuthMeVelocity xxx (Is it up to date?) java.lang.RuntimeException: Failed to download library 'com.typesafe:config:xxx'`
网络问题，重启服务器
## 从来没有配置过authme过使用2fa，但是authme突然开始要求2fa
证明authme数据库的`totp`列坏了，进入其数据库（mysql默认是`authme`数据库的`authme`表，sqlite3默认是`authme`表），将`totp`全部覆盖设置为`NULL`（mysql可以使用`UPDATE authme SET totp = NULL;`设置），如果是sqlite3需要重载插件，之后就可以了
