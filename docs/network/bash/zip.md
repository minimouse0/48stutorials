# zip/unzip

## zip

### 🧰 基本语法
```bash
zip [选项] 压缩文件名.zip 要压缩的文件或目录
```

---

### 📦 常用选项

| 命令 | 说明 |
|------|------|
| `zip file.zip file1 file2` | 将多个文件打包成一个 zip 文件 |
| `zip -r archive.zip folder/` | 递归压缩整个目录 |
| `zip -r archive.zip folder1/ folder2/ file1` | 同时压缩多个目录和文件 |
| `zip -9 file.zip file1` | 使用最高压缩率 |
| `zip -q file.zip file1` | 静默模式，不显示过程信息 |

---

### 🧪 示例操作

```bash
# 压缩当前目录下的 file1.txt 和 file2.txt 到 archive.zip
zip archive.zip file1.txt file2.txt

# 压缩整个 my_folder 目录
zip -r archive.zip my_folder/

# 压缩多个文件和目录
zip -r backup.zip docs/ images/ notes.txt
```

---

如果你的系统没有安装 `zip` 命令，可以通过以下方式安装：

- Ubuntu/Debian：
  ```bash
  sudo apt install zip
  ```
- CentOS/RHEL：
  ```bash
  sudo yum install zip
  ```

## unzip

### 🧰 基本语法
```bash
unzip [选项] zip文件名.zip
```

---

### 📦 常用选项

| 命令 | 说明 |
|------|------|
| `unzip file.zip` | 解压到当前目录 |
| `unzip file.zip -d /目标/目录` | 解压到指定目录 |
| `unzip -l file.zip` | 列出压缩包内容但不解压 |
| `unzip -o file.zip` | 解压并覆盖已有文件 |
| `unzip -n file.zip` | 解压但不覆盖已有文件 |
| `unzip -q file.zip` | 静默模式，不显示过程信息 |

---

### 🧪 示例操作

```bash
# 解压 file.zip 到当前目录
unzip file.zip

# 解压到 /home/user/documents 目录
unzip file.zip -d /home/user/documents

# 查看压缩包内容
unzip -l file.zip
```
