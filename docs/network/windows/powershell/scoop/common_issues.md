# 常见问题

## 安装时出现“存档条目是使用不受支持的压缩方法压缩的”错误

原因：PowerShell 自带的 `Expand-Archive` 和底层的 .NET 解压库不支持 Deflate64 格式，Scoop 默认调用它来解压 zip 包，就会报错。

解决方案：让 Scoop 使用 7zip 来解压  
- 安装 7zip：  
  ```powershell
  scoop install 7zip
  ```  
- 再次安装你想要的软件：  
  ```powershell
  scoop install 软件包名
  ```  
  此时会自动调用 7zip 完成解压，绕过 PowerShell 限制。

## 在线安装 scoop 时报错`iex : 使用“2”个参数调用“DownloadFile”时发生异常:“无法连接到远程服务器”`

如果你在连接到中国大陆ISP的服务器上安装scoop，那这个错误是正常的，这是因为scoop需要访问github来下载它的安装内容。

如果你尝试过各种代理都无法成功下载，那么你需要在其他电脑上使用代理访问Github下载scoop安装包进行离线安装。详见[离线安装](./install.md#离线安装)

## `Running the installer as administrator is disabled by default`

scoop默认禁止用管理员用户安装，因为这会导致其他用户无法访问它的安装目录。一般情况下，请新建一个普通powershell窗口，不要使用管理员身份运行。例如在windows10/11上，按下`win+x`后按下`I`即可打开普通命令行窗口。

如果你正在一个只有单个管理员用户的电脑上安装，那么你需要添加`-RunAsAdmin`参数。在线安装时可以使用`iex "& {$(irm get.scoop.sh)} -RunAsAdmin"`命令，离线安装时可以使用`.\bin\install.ps1 -RunAsAdmin`。
