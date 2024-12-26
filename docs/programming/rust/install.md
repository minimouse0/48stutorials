# 安装Rust编译器
## Windows
先[去rust官方网站下载rustup](https://rustup.rs/)，下载好之后直接双击  
打开之后先出现以下提示  
```
Rust requires a linker and Windows API libraries but they don't seem to be available.

1) Quick install via the Visual Studio Community installer(free for individuals, academic uses, and open source).

2) Manually install the prerequisites(for enterprise and advanced users).

3) Don't install the prerequisites(if you're targetting the GNU ABI).
```
1会直接在你的电脑上安装Visual Studio，如果你已经安装了Visual Studio，或者是你正好需要一个这软件，或者是你不在意他占据你C盘6-10GB空间，就可以直接选择这个，这个是最简便的  
如果你不喜欢在电脑上安装Visual Studio，你可以先手动安装MinGW等轻量的编译器，[安装好后选择3，接下来手动配置C/C++编译器](https://zhuanlan.zhihu.com/p/556088822)  
```
default host triple: x86_64-pc-windows-msvc

default toolchain: stable (default)

profile: default

modify PATH variable: yes

1) Proceed with installation (default) 

2) Customize installation

3) Cancel installation
```
如果你安装的是Visual Studio，那么选择1，直接开始安装，否则选择2，自定义安装，将可以自己选择使用MinGW  
```
I'm going to ask you the value of each of these installation options.

You may simply press the Enter key to leave unchanged.

Default host triple? [x86_64-pc-windows-msvc]
```
输入`x86_64-pc-windows-gnu`  
```
Default toolchain? (stable/beta/nightly/none) [stable]
```
直接回车  
```
Profile (which tools and data to install)? (minimal/default/complete) [default]
```
直接回车  
```
Modify PATH variable? (Y/n)
```
直接回车  
```
1) Proceed with installation (default)

2) Customize installation

3) Cancel installation
```
这就是回到了第一步，这次再选择1  
之后就会开始下载，显示类似以下内容
```
info: profile set to 'default'

info: setting default host triple to x86_64-pc-windows-gnu

info: syncing channel updates for 'stable-x86_64-pc-windows-gnu'

703.5 KiB / 703.5 KiB (100 %) 165.1 KiB/s in 7s ETA: 0s

info: latest update on 2022-08-11, rust version 1.63.0 (4b91a6ea7 2022-08-08)

info: downloading component 'cargo'

7.2 MiB / 7.2 MiB (100 %) 256.0 KiB/s in 31s ETA: 0s
```
如果下载失败，尤其是因为网络中断，重新运行安装程序按上面步骤操作即可  
安装完成后，可能还会向你询问几个问题，直接一路回车，直到窗口关闭  
此时应该已经安装完毕，新建命令窗口输入`rustc -V`确认是否安装成功  
