# 关于Markdown的Alert/Annotation Box这种语法的整理
这好像不是一种Markdown官方的语法，据我所知github支持的是比较好的，gitee不支持，在谷歌说都是说在GitHub上用，我怀疑是GitHub自己搞出来的语法  
这个docsify是通过一个插件支持的，我也不知道这个插件叫什么，反正用的话就是这个代码
```
`<script src="//cdn.jsdelivr.net/npm/docsify-plugin-flexible-alerts/dist/docsify-plugin-flexible-alerts.min.js"></script>`
````
目前一共是有以下几种（docsify上显示不出来的话点击右上角的编辑进GitHub看）  
基本都是我自己翻译的，因为不知道这东西标准的中文译名，翻译全是意译，跟原意可能有出入，如果读者知道的话欢迎pr修正  
想看源代码是怎么写的话也是点右上角编辑到GitHub看  
### 一种常见的警告或注解框语法
目前还没见到过别的，可能就这五种？  
[原文](https://github.com/orgs/community/discussions/16925)  
> [!NOTE]  
> 这段话要重视
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]  
> 想要成功的话这一步必须做对
> Crucial information necessary for users to succeed.

> [!WARNING]  
> 告诉用户潜在的危险
> Critical content demanding immediate user attention due to potential risks.

> [!TIP]
> 小贴士
> Optional information to help a user be more successful.

> [!CAUTION]
> 这样做可能会出问题（可以写错误做法）
> Negative potential consequences of an action.

有的人还喜欢这么写    
> **Note**<br>
这个写法目前GitHub识别不出来，不知道是后来更新了还是他教程写的不对  
[原文](https://bobbyhadz.com/blog/github-markdown-alert-admonition-box)  
### 用表格实现的警告或注解框
[原文](https://gist.github.com/cseeman/8f3bfaec084c5c4259626ddd9e516c61#file-markdown_examples-md)  
这个框是通过Markdown表格实现的，不是真正的新语法  
下面这些是文档里比较常见的这些emoji的意义

| :exclamation: 必读（You have to read about this）  |
|----------------------------------------------|

| :zap: 此设置很危险（Risky setup going on here!）  |
|------------------------------------------|

警告框的另一种多列的写法  
表头的分割线前面那个冒号是左对齐，去掉之后就会变成默认的居中，放在右边`|---:|`会变成右对齐  

| :memo:        | 请牢记（This is something that is good to note）       |
|---------------|:---------------------------------------------|

| :point_up:    | 请务必阅读此文档/段落（Hey did you actually read the doc above?）|
|---------------|:----------------------------------------|

警告框的另一种多行的写法  

| :warning: 警告（WARNING）           |
|:----------------------------|
| 广泛意义上的警告（Another way to warn you）     |

| :boom: 危险（DANGER）               |
|:----------------------------|
| 这个地方改不好的话程序就炸了（Whoa there with this config） |

前面的那个被冒号括起来的是emoji，用什么都行，这个不是语法定义只能用某几种  
|:running: 告诉用户看不懂可以跑路（bushi）|
|:----------------------------|
