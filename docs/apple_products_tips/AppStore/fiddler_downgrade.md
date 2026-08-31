# Fiddler+iTunes抓包降级

> [!WARNING]
> 抓包过程中电脑会几乎断网，请勿在电脑上有重要联网程序运行时操作
> 
## 下载安装对应软件

### iTunes

[下载地址（Github）](https://github.com/Semporia/TikTok-Unlock/issues/371)

如果你先前已经安装过iTunes，而且你对该软件并不是十分了解，那么建议卸载重装：[iTunes完全卸载教程](apple_products_tips/iTunes/windows_uninstall.md)

### Fiddler

[下载地址](https://www.telerik.com/download/fiddler)

安装后打开出现一个弹窗让选Yes No Cancel，**一定选Cancel！一定选Cancel！一定选Cancel！** 作者初次尝试后选择了Yes，结果Firefox无法联网，重启电脑后引导损坏，尝试多种工具均无法修复最后只能重装系统，怀疑是此处选择了Yes造成的

进入主界面之后菜单栏Tools,Options,HTTPS,里面勾上Decrypt HTTPS traffic，勾上的瞬间会弹出一个警告，这是因为Fiddler要往你系统里安装根证书，至于根证书有什么用可以看[一文看懂HTTPS协议/SSL证书所有主流方案](uncategorized/principleofhttpsssl)，此处开始一路点是或者yes就行，这样就可以让Fiddler读取HTTPS协议了

后面再打开其他app的时候，如果fiddler处于开启状态，那么可能会弹窗说Certificate Error，都直接点是/Yes就行
## 找到自己要下载的App
现在打开iTunes，同意用户协议，然后登录，**注意此处不要开着Fiddler！** iTunes似乎有检测机制，开着抓包软件会连接服务器失败

在iTunes里登录之后，左上角菜单栏下方会有一个类别的选项，默认显示的是音乐，点击将它展开，下面有一个编辑菜单，之后会出现一大堆类别，把应用勾上，点击软件界面其他区域关闭选项列表，然后再点击类别的选项，展开之后就会有应用了，此时再选中它

打开应用界面之后，如果应用在当前帐号所在地区已上架，那么直接右上角搜索框搜索即可。如果是自己曾经通过改区、兑换，或很久以前此app还未下架的年代就已经获取过等方式获取到了该应用，那么右侧侧边栏中快速链接一栏下选择已购项目，在里面就可以找到那个自己已经拥有的应用。

> [!WARNING]
> 请尽量退出电脑上所有会联网的应用，防止干扰抓包

## 获取版本对应id

启动Fiddler

进入你要下载的应用的界面，比如它的商店页面或者已购项目页面找到它

然后去iTunes里面点击应用的下载按钮，等待应用开始下载，之后在iTunes里面的右上角会出现一个下载图标，点击后会展开显示正在下载的内容，此时下载的是最新版，如果你不想要当前这个最新版，可以点击选中它，然后按两下del键，下载就会取消，已下载的部分也会被自动删除

回到Fiddler中，左侧请求列表中找到URL为`p[数字]-buy.itunes.apple.com的`请求，双击它显示详情

此时左侧会出现一个HOST为`p[数字]-buy.itunes.apple.com`的，URL为`/WebObjects`开头的，双击它显示详情，此时如果右边有一个大大的黄色的Response body is encryped. Click to decode.的按钮，点击它。随后右键请求 -> Save -> Response -> Response Body，弹出一个保存框，保存到你能找到的位置

找到刚才保存的文件，应该是一个xml格式的，打开它，往下翻，之后会翻到一大片全是<integer>数字</integer>的内容，这部分就是这个app大部分版本的id，最下面的是最新的，app每发布一个版本号就下面就会加一行，例如以下是mc基岩版的部分版本号：

截至本文写成时基岩版最新版是1.21.72，所以最后一行就是1.21.72，往上推算即可
```xml
<integer>870687063</integer>1.21.50
<integer>870973635</integer>1.21.51
<integer>871954386</integer>1.21.60
<integer>872544840</integer>1.21.61
<integer>872639222</integer>1.21.62
<integer>872977864</integer>1.21.70
<integer>873566805</integer>1.21.71
<integer>873795097</integer>最后一行，所以是1.21.72
```
如果不知道你的app都发布过什么版本，你可以现在打开你的iOS设备，进入这个app的对应页面，翻到版本记录那里，点进去，里面就是app所有发布过的版本。

## 抓包降级

如果你之前已经取消过这个app的下载，那么需要重新启动一次iTunes，因为iTunes每次启动都只能下载一次对应的app，下次启动前对应app的下载按钮会不可用

如果之前已经下载过这个app的下载，那么则是需要顶部切换到资料库，右键已经下载过的app删除它，然后才能去AppStore里面进行下载

注意，启动iTunes时不能运行Fiddler，需要先将其关闭再启动iTunes

先进入到iTunes下载你要下载的应用的页面，就是刚才说的商店页面或者已购项目

到Fiddler里面按一下F11，之后左下角会出现一个红色标识，此时你的电脑将近似断网

然后去iTunes里面点击下载按钮，让iTunes发送下载请求

右侧会出现上下两个区域，选择上面区域的TextView选项卡，下面红色部分点击Run To Completion的绿色按钮

此时左侧会出现几个被阻塞的请求（红色标志），其中有一个URL为`p[数字]-buy.itunes.apple.com`开头的，双击它显示详情，点击Run to Completion

然后左侧将新出现一个HOST为`p[数字]-buy.itunes.apple.com`开头的，URL为`/WebObjects`开头的，双击它，在右侧点击上半部分界面的TextView选项卡切换过去（一共有两个TextView，你应该点击上面的那栏），然后将dict下面的string项，位于
appExtVrsId的下面，改成你要下载的目标版本的id，然后点击Run to Completion

之后在左边把每个最左侧图片为红色的请求都按双击显示详情，里面点击Run to Completion的方式操作一遍，上个步骤中就已经出现的那那些run to completion即可，再新出现的就不用管了，如果怕失败，就把左边的请求尽可能全部run to completion，一个都不要漏掉，直到看到开始出现海量新请求的时候再执行下一步

刚刚我们提到在Fiddler里面按一下F11之后左下角会出现一个红色标识，现在鼠标点击它两次，然后它就会消失，那里就会变成空白

上一步双击红色标识是解除了抓包的阻塞，但这个操作只会不阻塞新的请求，旧的请求仍会被继续阻塞，所以你需要翻到上面，把所有标红的请求再run to completion

这个时候再等一会，app就会开始下载，再过一会就下载完成了

## 拿到下载好的ipa

现在点击顶部的资料库，然后里面就会显示出你刚下载的app。右键它，点击在Windows资源管理器中显示，之后就可以在文件管理器中定位到它了。这时请检查它的版本号，如果是最新版证明抓包失败，需要从头操作。如果版本号正确，那么直接用爱思等工具安装到你的iOS设备上即可。app是已经签名好的，所以不需要自己签名，直接安装即可。

## 其余版本号的收集
```
    <integer>884112549</integer>13
    <integer>884609193</integer>20
    <integer>885643295</integer>21
    <integer>885873969</integer>30
    <integer>890010837</integer>45
```
