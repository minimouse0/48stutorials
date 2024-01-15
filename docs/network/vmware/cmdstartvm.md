# 使用命令启动VMWare虚拟机
VMWare使用其内置的可执行文件vmrun.exe启动虚拟机。这个可执行文件是一个命令行程序，它启动指定虚拟机的命令格式是`vmrun start <虚拟机文件路径>`。例如我要启动的虚拟机的路径是`C:\Users\Administrator\Documents\Virtual Machines\vm\vm.vmx`，那么我就需要写`.\vmrun start "C:\Users\Administrator\Documents\Virtual Machines\vm\vm.vmx"`
vmrun.exe这个文件一般位于VMWare Workstation安装目录的根目录，比如你是安装按照默认路径安装，那它的路径就应该是`C:\Program Files (x86)\VMware\VMware Workstation\vmrun.exe`。
## 示例
```
cd "C:\Program Files (x86)\VMware\VMware Workstation"
chcp 65001
.\vmrun.exe start "C:\Users\Administrator\Documents\Virtual Machines\web\web.vmx"
.\vmrun.exe start "E:\paper\paper.vmx"
```
