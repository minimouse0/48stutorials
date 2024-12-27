# 常见问题
## `Bad permissions. Try removing permissions for user ...`
完整的报错信息一般格式如下：  
```
Bad permissions. Try removing permissions for user: 计算机名\\计算机上某用户的用户名 (一个UID) on file C:/Users/当前用户的用户名/.ssh/某文件名.
Bad owner or permissions on C:\\Users\\当前用户的用户名/.ssh/某文件名
```
此报错一般只出现在Windows自带的Openssh-server上  
1. 前往`C:/Users/当前用户的用户名/.ssh/`
2. 对着报错中提到的文件右键属性
3. 安全选项卡
4. 高级
5. 底部禁用继承
6. 选择将已继承的权限转换为此对象的显式权限
7. 确定
8. 在组或用户名下面点编辑
9. 选中刚刚报错中显示的那个用户
10. 删除
11. 确定
