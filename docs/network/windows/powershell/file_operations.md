# 文件操作

# 复制

## 合并同名文件夹，同名文件覆盖

```powershell
Copy-Item -Recurse -Force -Path "要被复制的文件" -Destination "目标目录，复制到这个目录下面"
```

## 合并同名文件夹，同名文件跳过

```powershell
robocopy "旧路径" "新路径" /E /XC /XN /XO
```

为了防止大家不理解，这里举几个例子：

普通的复制
```powershell
robocopy "./project" "../releases/project" /E /XC /XN /XO
```

复制的同时改名
```powershell
robocopy "./project" "../releases/project20251015" /E /XC /XN /XO
```
