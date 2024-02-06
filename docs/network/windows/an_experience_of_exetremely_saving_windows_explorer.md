# 一次极限操作拯救Windows explorer的经历
我也不知道我究竟改的是什么，但我感觉这次经历中的很多东西都有参考价值  
操作系统是Windows 10 22H2  
一开始我只是想改Windows的smb的默认端口，按理说这东西都需要上注册表改，于是我就上bing查  
找到一个人提供的方案，他也是问的ChatGPT，原文[windows 修改smb服务端口(无法通过其他端口连接smb服务)](https://www.xiaoc.cn/article/2021_12_31/407.html)  
于是我就照做了，然后重启电脑
重启之后电脑就开始不对劲了，explorer一直在卡死，只能操作一两步，于是我就打开任务管理器，重启explorer然后从run里面打开regedit，把教程里面让我加的注册表值删了，之后重启电脑，仍然是不行  
这就不好办了，因为explorer是windows的核心程序，如果我不修这个问题，就只能给电脑重做系统，相当麻烦  
两个我就分析造成问题的原因，可能有两种，一种是我还是其中有一步没恢复完，另一种是我改完这些配置之后Windows又根据刚刚新加的配置做了新的配置，但是我还不知道那个新配置是什么，所以现在这个情况我最怕的就是第二种，一旦是这个的话就更棘手了  
那就开始排除呗，我先试试第一种可能性，因为理论上如果是第二种可能性的话，那我把第一步的东西做完了也不影响第二步，毕竟我只是把配置完的东西又恢复回去  
我先去注册表里看了刚刚我改的配置有没有改回去，都改回去了，再重启，还是没用  
电脑开了一会自己好了，我想起来刚刚有一个教程里说了去看445端口有没有占用，命令是`netstat -aon | findstr "445"`，于是我就去powershell里执行了一下（现在powershell打开的也可慢了，显然不正常，可能也是受到explorer故障的影响），果不其然没有东西，然后我又去看了一下我改到的目标的端口，结果也是不行  
那提供smb服务的这个程序现在怎么样了，还在运行吗？刚刚在教程里看到如果445端口被占用了需要把相关的服务关闭，叫`Server`，于是我就直接去服务里找到它，果然是没有开启，我手动开启，结果启动失败，错误`1075  `
我上网找了一下启动服务时遇到1075的问题，没有解决方案  
那就只能自己修了，他说不存在，我就得看看是不是真的不存在，我右键服务点击属性，发现常规里有一条可执行文件的路径是`C:\WINDOWS\System32\svchost.exe -k smbsvcs`，于是我就去执行这个命令，执行成功了，什么报错和输出都没有  
那他怎么就启动不了呢，可能还是有操作没还原，我去看了另一个步骤就是重载配置，命令是`sc.exe config lanmanserver depend= bowser/mrxsmb10/nsi`，我一看他改的是depended，好像改的也不是配置，那能不能是这里改完的东西跟之前不一样，那这个东西的原始值是什么呢，恰好我这还有一台好的同样系统的电脑，于是我直接执行`sc.exe config lanmanserver depend`，结果提示不正确，我又上网查了一下，微软官方文档里写好像确实是不能这么用，但是又看到一条有用的信息，就是`depend=`后面要接的依赖需要用`/`隔开，也就是说刚刚那条命令把我电脑上的`Server`这个服务的依赖改成了`bowser`、`mrxsmb10`和`nsi`。  
那原来的依赖是什么呢，我先搜索`sc.exe config lanmanserver depend=`，看看能不能搜出其他的命令来，还真搜出来一个，`sc.exe config lanmanserver depend= Samss/Srv/MSiSCSI`，于是我就输入了一下之后再启动服务结果还是不行，那就只能再从那台好用的电脑上找原来的服务了，我注意到服务的属性窗口里正好有一个叫依存关系的选项卡，在两台电脑上分别点进去，果然显示出来的是不一样的，好的那台电脑上是`Security Accounts Manager`和`Server SMB 2.xxx Driver`，显然这里被改过了，可能是被刚才那条命令改的，那让坏的那台电脑恢复这两个就应该可以解决问题了，那怎么输入命令才能让他依赖这两个服务？也就是说，这两个依赖在命令里应该叫什么？`Security Accounts Manager`这个在坏的电脑上已经有了，应该是刚才执行命令的时候那些依赖里面有他，但是`Server SMB 2.xxx Driver`是什么我还是不知乎，我就上网查了`Server SMB 2.xxx Driver`，果然是有结果，这是一个关于`Server SMB 2.xxx Driver`的文档，里面提到这个东西的`Display Name`是`Server SMB 2.xxx Driver`，`Service Name`是`srv2`，于是我就再加上这个变成`sc.exe config lanmanserver depend= Samss/Srv/srv2/MSiSCSI`，执行了一下，执行成功了，这时重新打开`Server`服务的属性窗口，果然依存关系里出现了`Server SMB 2.xxx Driver`，但是还是有其他的依赖，然后重启系统，还是不行  
那看来是得所有的依赖都完全相同才行了，`Server SMB 2.xxx Driver`已经确定了叫`srv2`，现在确认`Security Accounts Manager`是哪个就行了，Windows的这些东西基本都是缩写，于是我看这里面有一个服务叫`Samss`，虽然说不是完全对得上，但是应该是他了，于是我把整个命令改成`sc.exe config lanmanserver depend= Samss/srv2`，再启动服务，终于成功了，445端口上有服务，可以用\\127.0.0.1访问，explorer和powershell也终于不卡了
