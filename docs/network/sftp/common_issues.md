# 常见问题
## 服务器为Windows系统时怎么切换盘符
使用`cd /:盘符/`即可切换，例如`cd /:d/`

## macos自带sftp不支持方向键，按下方向键时出现`^[[A^[[B^[[C^[[D`

macOS 原生自带的 `sftp` 工具在编译打包时，**没有链接 `readline`（或 `libedit`）交互行编辑库**。

当你按方向键（上/下/左/右）时，键盘发送给终端的是 ANSI 转义控制码（如 `^[ [ A` 代表上箭头）。如果交互程序没有加载 `readline` 库，它就无法把这些控制码解析成“移动光标”或“调出历史命令”，而是直接当成普通文本打印在屏幕上了。

### 方法 1：安装包装工具 `rlwrap`（最简单推荐）

`rlwrap` (ReadLine Wrapper) 可以为任何不支持行编辑的命令行工具（比如 macOS 原生 sftp）直接补齐方向键、历史记录、光标移动等功能。

1. 使用 Homebrew 安装 `rlwrap`：
```bash
brew install rlwrap

```


2. 以后使用 `sftp` 时，在前面加上 `rlwrap` 即可：
```bash
rlwrap sftp user@host

```


3. **彻底偷懒技巧**：在终端配置文件（`~/.zshrc` 或 `~/.bash_profile`）中加个别名：
```bash
alias sftp='rlwrap sftp'

```


修改后执行 `source ~/.zshrc` 生效，以后直接输入 `sftp` 就能完美支持方向键了。

---

### 方法 2：使用 Homebrew 重新安装 OpenSSH

Homebrew 提供的 `openssh` 套件在编译时默认开启了行编辑支持。

1. 安装系统的 OpenSSH：
```bash
brew install openssh

```


2. 确保 Homebrew 的可执行路径优先级高于系统自带路径，然后重新打开终端即可使用功能完整的 `sftp` 命令。
