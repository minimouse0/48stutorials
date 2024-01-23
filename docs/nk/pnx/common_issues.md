# 常见问题
## [engine] WARNING: The polyglot context is using an implementation that does not support runtime compilation.
下面有一个推荐的加什么参数我暂时不知道怎么操作，但是你可以安装graaljit，使用参数`comp -i=graaljit`运行pnx-cil即可
## java.lang.NoClassDefFoundError: Could not initialize class org.graalvm.polyglot.Engine$ImplHolder
自从不知道哪个版本（至少1.20.1-r2）开始，pnx的graaljit会出问题，只有graaljit没有js插件的时候，pnx开服报错，关服崩溃；又有graaljit又有js插件的时候，pnx开服报错然后崩服，现在只能在新版弃用所有js插件
## java.lang.NoClassDefFoundError: com/google/gson/ToNumberStrategy
lib里有库过期了，删除服务器根目录中的lib，让pnx自动重新下载
