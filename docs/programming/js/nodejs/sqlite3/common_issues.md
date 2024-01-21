# 常见问题
## （npm i sqlite3安装失败）ModuleNotFoundError: No module named 'distutils'
了解过python的都知道这是个python的报错，因为sqlite3的前置里面是有python的  
这个问题一般出现在环境是python3.12以上的时候，因为python3.12移除了distutils包（其实3.10的时候就已经给这个包标注上`deperated`了）  
这个问题在系统里手动安装setuptools即可解决（`pip3 install setuptools`）  
[原文](https://stackoverflow.com/questions/77233855/why-did-i-got-an-error-modulenotfounderror-no-module-named-distutils)
