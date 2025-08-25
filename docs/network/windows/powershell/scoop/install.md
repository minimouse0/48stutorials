# 安装scoop

## 在线安装

1. 首先请执行以下命令：
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

2. 在管理员 PowerShell 中执行以下命令，一键下载并安装 Scoop：  
   ```powershell
   iwr -useb get.scoop.sh | iex
   ```  
3. 安装完成后，验证 Scoop 是否正常：  
   ```powershell
   scoop help
   ```  
   如果出现帮助菜单，即表示安装成功。

---

## 离线安装

### 准备安装包

#### ✅ 1. 克隆 Scoop 主仓库

```bash
git clone https://github.com/ScoopInstaller/Scoop.git
```

这会得到 Scoop 的核心代码。

#### ✅ 2. 上传 Scoop 文件夹

你克隆下来的scoop仓库直接就是它的安装包。现在你需要将它通过网络或U盘上传至服务器。你可以将scoop文件夹打包来避免多个小文件造成上传缓慢。

### 本地安装scoop

在你的 Windows Server 上：

#### ✅ 1. 解压 Scoop 到用户目录

例如，如果你刚才直接将scoop目录复制到u盘根目录，而且它插到服务器上后盘符为D：

```powershell
mkdir $env:USERPROFILE\scoop
Copy-Item -Path "D:\Scoop" -Destination "$env:USERPROFILE\scoop" -Recurse
```

这条命令会把scoop的目录复制到`C:\Users\Administrator`下。

> [!WARNING]
> **不要直接在 `C:\Program Files` 下安装 Scoop**，因为 Scoop 默认是为用户级安装设计的，建议放在：
> ```powershell
> $env:USERPROFILE\scoop
> ```
> 
> 如果你确实需要系统级安装（比如给所有用户用），可以指定安装路径：
> ```powershell
> .\install.ps1 -ScoopDir "C:\Scoop" -ScoopGlobalDir "C:\ScoopApps" -RunAsAdmin
> ```

#### ✅ 2. 设置环境变量

```powershell
$env:SCOOP = "scoop的目录"
[Environment]::SetEnvironmentVariable("SCOOP", $env:SCOOP, "User")
```

#### ✅ 3. 初始化 Scoop

进入 Scoop 文件夹，运行：

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
.\bin\install.ps1
```

## 🪣 第三步：配置本地 bucket（软件仓库）

Scoop 使用 bucket 来管理软件列表。你可以在其他联网机器上下载常用 bucket：

### ✅ 1. 克隆主 bucket（如 `main`）

```bash
git clone https://github.com/ScoopInstaller/Main.git
```

然后将其复制到服务器上，并添加为本地 bucket：

```powershell
scoop bucket add main "$env:USERPROFILE\scoop\buckets\main"
```



## 配置并更新 Scoop

1. 先更新 Scoop 自身及各个 bucket：  
   ```powershell
   scoop update
   ```  
2. 添加常用软件源（可选）：  
   ```powershell
   scoop bucket add extras
   scoop bucket add versions
   ```
