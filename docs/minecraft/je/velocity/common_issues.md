# 常见问题
## 玩家进入服务器时提示`missing profile public key`
修改velocity.toml的以下设置：
```
# Should the proxy enforce the new public key security standard? By default, this is on.
force-key-authentication = true -> false
```
