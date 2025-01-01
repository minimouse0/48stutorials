# 可能造成高空间占用的文件夹或文件
> [!NOTE]
> 用户名是自己的用户文件夹，记得更改变自己用户文件夹的对应路径

|路径|属于的app|说明|清理方式|
|---|---|---|---|
|~/Library/Containers/com.microsoft.rdc.macos/Data/tmp|RD Client|文件夹映射缓存|清空，不建议删除|
|~/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/[一个十六进制数]/Message|微信|微信聊天记录|在微信中登录对应帐号清理
|~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/[某十六进制数]/nt_data/Emoji|QQ|QQ表情包缓存||
|~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/[某十六进制数]/nt_data/msgbackup|QQ|QQ聊天记录备份|将其中内容移动至备份硬盘|
|~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/[某十六进制数]/nt_data/Pic|QQ|QQ聊天记录图片|按日期删除自己不需要的部分|
|~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/[某十六进制数]/nt_data/Ptt|QQ|语音|按日期删除自己不需要的部分|
|~/Library/Containers/com.tencent.qq/Data/Library/Application Support/QQ/[某十六进制数]/nt_data/Video|QQ|视频|按日期删除自己不需要的部分|
|~/Library/Application Support/MobileSync/Backup|Finder|Finder的iOS备份|将其中内容移动至备份硬盘|
