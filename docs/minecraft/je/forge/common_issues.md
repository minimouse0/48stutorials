# 常见问题
## 游戏无法启动，报错`Caused by: java.util.zip.ZipException: zip END header not found`
如果你是在macOS上启动的游戏，前往游戏模组文件夹，禁用所有._开头的模组，然后就可以进游戏了

出现这个问题是因为macOS的finder保存文件预览元数据的功能与forge冲突，finder会为每个文件在其同级目录创建一个`._`开头的4KB大小的缓存文件用于存储其在finder中的显示坐标等信息，然而由于它是以.jar结尾的文件，会被forge当成模组加载，所以就造成了forge加载了这些缓存文件并不识别进而停止运行。

具体可以看视频 [为什么macOS喜欢在文件系统里到处拉屎？](https://www.bilibili.com/video/BV1L4znYWECG/?share_source=copy_web&vd_source=55784fc4ee40b4e3c61808cc4ed6533c) 进一步了解
