# 常见问题

## 点击登录时提示错误代码

|   |Windows|安卓|iOS|
|---|---|---|---|
|蝙蝠|首先请确认你的互联网连接正常，然后电脑上已经安装Xbox app，如果没有安装，请前往应用商店（Microsoft Store）搜索Xbox，然后安装好，打开它，登录你的帐号，之后重启mc并再试一次。如果还是不行，请检查你的电脑上是否已经安装了[Xbox Identity Provider](ms-windows-store://pdp/?ProductId=9WZDNCRD1HKW)。如果未安装的话，点击教程里这个链接跳转至Microsoft Store进行下载安装，装好后再重启mc试一次。|   |   |
|溺尸|   |   |使用自签的方式通过ipa安装mc基本都会出现这个问题。如果你需要登录帐号并玩服务器，那么你需要使用已经购买过国际版的iOS帐号进行安装。如果你需要安装指定版本，那你必须通过抓包的方式获取ipa来进行安装|

## 存档路径在哪

Windows：`C:\Users\你的用户名\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds`

## [鼠标延迟高/电脑帧率锁30帧/锁60帧怎么办](https://www.bilibili.com/video/BV17Y4y1a7D3)

## 看不到别人皮肤怎么办

设置，通用，仅允许受信任的皮肤关掉

## 支持Promotion（高刷屏）的iOS设备没有高刷怎么办

iOS版的基岩版不支持高刷，无解

## 怎么降级

### 安卓

使用MT文件管理器打开旧版安装包，打开`AndroidManifest.xml`，如果你是没有经验没有MT管理器会员的新手可以选字符常量池，然后找到这个安装包的版本号的字段，比如这个安装包是1.21.50版本的，那就去找1.21.50开头的字段，然后点击进行编译，把它改成比你现在手机上安装的版本还要高一点的版本，比如你现在手机上安装了1.21.62.01，现在要降到1.21.50，那么就把1.21.50.xx修改成1.21.62.02，之后点击右上角三个点，选择保存，返回，此时会有提示“文件"AndroidManifest.xml"已被修改  你希望在压缩文件中更新它吗？”勾上自动签名，点击确定，然后就会生成一个内容为旧版但版本号为新版的安装包，直接安装这个安装包即可，手机会自动按升级的方式降级应用，同时保留所有数据

### Windows

直接双击appx安装包进行安装即可

### iOS

先前往设置，存储空间，把Minecraft卸载（不要删除），然后准备好已经拥有Minecraft的appleid和一台x86的windows电脑，按照[这篇教程](apple_products_tips/AppStore/fiddler_downgrade)进行操作

## 帐号同时登录多设备时，只能有一个设备上显示自定义皮肤怎么办

请使用皮肤包导入你的皮肤，[教程](https://www.bilibili.com/video/BV1nz4y1n7rt/?share_source=copy_web&vd_source=55784fc4ee40b4e3c61808cc4ed6533c)

## iOS切后台之后再回来就无法连接服务器了

mc的bug，如果你的iOS设备内存不超过4G，那么每次切后台回来都要重启游戏才能正常进服务器
