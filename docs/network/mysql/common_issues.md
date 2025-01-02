# 常见问题
## 从csv文件向mysq导入数据时，报错`ERROR 1265 (01000): Data truncated for column 'xxx' at row xxx`
1. 数据库中对应列是`NOT NULL`，但是csv中相应位置是`NULL`
2. csv中相应位置是空的，连`,\N,`也不是，而是`,,`
3. csv中的列数比mysql中已存在表的列数要少
4. Windows系统中的CRLF换行符冲突，详见 https://cloud.tencent.com/developer/article/2042691
5. csv中的列顺序有误，检查一下mysql中已存在的表的列和数据类型，看看能不能和csv中的对应得上

## 从csv文件向mysq导入数据时，报错`ERROR 1366 (HY000): Incorrect integer value: '' for column 'xxx' at row 1`
csv中相应位置是空的，连`,\N,`也不是，而是`,,`

## `ERROR 1290 (HY000): The MySQL server is running with the --secure-file-priv option so it cannot execute this statement` 
MySQL 服务器启用了 `--secure-file-priv` 选项，限制了 LOAD DATA INFILE 等文件导入导出操作的文件目录。

为了解决这个问题，可以按照以下步骤进行修改：

1. **找到 MySQL 配置文件**：
   通常为 `my.cnf` 或 `my.ini` 文件，具体位置取决于操作系统和安装方式。
   - 在 Linux 上，可能在 `/etc/mysql/my.cnf` 或 `/etc/my.cnf`。
   - 在 Windows 上，可能在安装目录下，如 `C:\ProgramData\MySQL\MySQL Server 8.0\my.ini`。

2. **编辑配置文件**：
   使用文本编辑器打开配置文件，找到 `secure-file-priv` 设置。如果找不到，可以添加它。将其设置为一个允许文件导入导出的目录，例如：
   ```ini
   [mysqld]
   secure-file-priv="D:/mysql-files"
   ```
   如果你不想再要这个限制了，希望整个电脑上所有文件都可以被导入，那么设置
   ```ini
   [mysqld]
   secure-file-priv=
   ```
   等号后面是空的不会影响，就应该这么写，不写等号反倒不能识别

3. **重启 MySQL 服务**：
   保存配置文件并重启 MySQL 服务，使配置生效。
   - 在 Linux 上，使用以下命令：
     ```shell
     sudo systemctl restart mysql
     ```
   - 在 Windows 上，可以通过“服务管理器”重启 MySQL 服务。
  
