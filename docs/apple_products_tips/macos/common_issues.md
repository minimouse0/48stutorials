# 常见问题
## [如何清除DNS缓存](https://zhuanlan.zhihu.com/p/586645355)
## [如何批量删除.DS_Store文件](https://www.cnblogs.com/Flat-White/p/17027970.html)
省流：
```
# 删除当前目录及所有子目录所有.DS_Store文件
find . -name ".DS_Store" -type f -delete
```
## [如何批量删除._开头的文件](https://www.cnblogs.com/Flat-White/p/17027970.html)
省流：
```
# 删除当前目录及所有子目录所有.DS_Store文件以及“._”开头文件
find . -name "._*" -delete
```
