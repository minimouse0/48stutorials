# 离线安装软件包

**本文以nano为例**

## ✅ 1. 获取软件的 manifest 文件（`.json`）

在联网机器上找到 `nano.json`，通常在 `Main\bucket\nano.json`。

## ✅ 2. 下载 nano 的安装包（如 zip 或 exe）

根据 `nano.json` 中的 `url` 字段，手动下载软件包。

## ✅ 3. 放入 Scoop 的缓存目录

在服务器上创建缓存目录：

```powershell
mkdir "$env:USERPROFILE\scoop\cache\nano#<version>"
```

将下载好的文件放进去，并重命名为 Scoop 期望的文件名（去掉 `.download` 后缀）。

## ✅ 4. 安装 nano

```powershell
scoop install nano
```

如果缓存文件正确，Scoop 会跳过下载，直接安装。

---

## 🧪 验证安装

```powershell
nano
```

如果能打开编辑器，说明你成功了！
