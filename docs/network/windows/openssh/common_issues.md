# 常见问题

## 设置好密钥登录之后，怎么还是让我用密码登录？

这种情况证明你的密钥登录没有生效，可能是遗漏了步骤，或者是系统中有其他设置有错误。

如果你已经确认你做完了所有必要的步骤，那么请用以下操作排查问题：

**首先，请先确认你本地的密钥没有被破坏，而且你的公钥已正确上传。如果你是从本地复制粘贴公钥到服务器，请确保你没有遗漏公钥前后的字符。另外，请确认你使用的用户名正确，而且你的服务器上的ssh配置文件（位于`C:\ProgramData\ssh\sshd_config`）中包含`PubkeyAuthentication yes`和`AuthorizedKeysFile .ssh/authorized_keys`。**

**另外需要特别强调一下，如果你对配置文件做了更改，务必重启sshd服务（`Restart-Service sshd`），否则所做更改不会生效**

如果已经排查过以上问题仍然不行

### 检查`authorized_keys`文件编码
ssh要求`authorized_keys文件`的编码必须是UTF-8而且不带BOM。你可以通过以下方式检查：
- 使用记事本（notepad .ssh/authorized_keys）打开这个文件，如果右下角显示的不是“UTF-8”，而是其他的内容，比如“带有BOM的UT”，证明文件的编码不正确。
- 如果你在使用纯命令行（比如正通过ssh但用密码将就着登录上去），可以用以下步骤来测试：
    1. 执行以下命令。如果输出包含非 ASCII 字符，说明文件可能是 UTF-8 或其他多字节编码。如果乱码，可能是 GBK 或其他非 UTF-8 编码。
    ```
    chcp 65001
    type .ssh/authorized_keys | findstr /R "[^\x00-\x7F]"
    ```
    2. 执行`certutil -dump .ssh/authorized_keys`。随后会以十六进制数打印出文件中的二进制内容。检查这些十六进制数的开头，如果文件开头是 EF BB BF，那就是带 BOM；如果没有这些字节，就是无 BOM。
 
如果文件格式不正确，请将其删除并重新进行设置免密登录时上传密钥的步骤。**请不要使用`type`或`Out-File`，因为这些命令创建的文件都是UTF-8带BOM的，会导致ssh无法识别。请务必使用教程中提到的.NET StreamWriter。**

### 检查`.ssh`和其中`authorized_keys`的权限

使用`icacls`查看这两个文件的权限。两个文件都必须只有SYSTEM和你自己的帐户有F标志的权限（完全控制 Full Control），其他用户必须不能对这两个文件有权限，否则就无法使用密钥登录。

下面简要说一下怎么看这个权限。比如我在我的服务器上执行完命令是这样的：
```powershell
PS C:\Users\Administrator> icacls C:\Users\Administrator\.ssh
C:\Users\Administrator\.ssh WIN-PNIR9FHPRQ3\Administrator:(F)
                            NT AUTHORITY\SYSTEM:(OI)(CI)(F)
```
在这次执行中，可以观察到该路径只有`WIN-PNIR9FHPRQ3\Administrator`（我自己）和`NT AUTHORITY\SYSTEM`（SYSTEM）有权限，其他人都没有权限。而括号中就是权限的标志。F代表完全控制Full Control，O代表 Object Inherit（对象继承）。这意味着这个权限将继承给目录下的文件；C代表 Container Inherit（容器继承）。这意味着这个权限将继承给目录下的子目录。I 代表 Inherited（继承）。这意味着这个权限不是直接设置在这个文件上的，而是从它的父目录（.ssh）继承而来的。

如果你发现权限不足，可以执行以下操作：

重置该文件的所有权限，此时该文件会变成从父级目录继承所有权限（所有权限都带I）
```powershell
icacls <文件路径> /reset
```
为该文件添加必要的OI、CI和F权限：
```
icacls <文件路径> /grant "<用户名，直接写Administrator或SYSTEM就行>:(OI)(CI)F"
```
