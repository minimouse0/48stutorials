# 常见问题
## .command脚本如何cd到脚本所在目录
```
cd "$( dirname "$0" )"
```
## npm安装完包之后对应npm包的指令不生效怎么办

例如提示：`pm2 not found`

<details>
  <summary>详细教程</summary>

---

## **分析过程**
在这类问题中，我们通常会检查以下几个方面：
1. **检查 `PATH` 变量** — 确保 `npm` 全局安装的 `bin` 目录在系统 `PATH` 变量中。
2. **确认 `pm2` 是否真的安装** — 通过 `npm list -g --depth=0` 来查看 `pm2` 是否已安装。
3. **检查 `which pm2`** — 这个命令可以检查系统是否能找到 `pm2` 命令。
4. **查找 `npm` 全局安装路径** — 使用 `npm prefix -g` 确定安装目录，并验证 `bin` 目录是否包含 `pm2`。

---

## **解决方案**
### **1. 确认出问题的npm包已安装**
运行：
```sh
npm list -g --depth=0
```
如果列表中能找到该npm包的命令，说明它确实安装在某个全局目录中。

---

### **2. 检查出问题的npm包具体的安装位置**
由于 `which npm包的命令` 可能返回 `not found`，可以尝试：
```sh
npm prefix -g
```
这个命令会返回 `npm` 全局安装的根目录，比如：
```
/opt/homebrew/lib/node_modules
```
然后，我们可以检查出问题的npm包是否在这个路径下：
```sh
ls $(npm prefix -g)/bin
```
如果输出类似：
```
corepack  npm  npm包的命令   node  npx
```
说明出问题的npm包真的安装了，但系统没有正确识别它的位置。

---

### **3. 运行npm包的命令并验证**
由于 `PATH` 变量可能未正确配置，可以尝试手动运行：
```sh
$(npm prefix -g)/bin/npm包的包名
```
如果命令运行成功，则说明 `PATH` 配置不正确。

---

### **4. 更新 `PATH` 变量**
为了让系统全局识别npm包的命令，需要将 `npm` 的 `bin` 目录加入 `PATH`：
```sh
export PATH=$PATH:$(npm prefix -g)/bin
```
并将其永久添加到 `~/.zshrc`：
```sh
echo 'export PATH=$PATH:$(npm prefix -g)/bin' >> ~/.zshrc
source ~/.zshrc
```
这样，这个命令以后就可以直接运行，而无需指定完整路径。

---

## **原理解析**
- **npm 安装的可执行文件** 默认存放在 `npm prefix -g` 目录下的 `bin` 目录中。
- **PATH 变量** 告诉 shell 去哪些目录查找可执行文件。如果 `npm` 的 `bin` 目录不在 `PATH` 中，shell 就无法识别包的命令。
- **`which 包的命令`** 检查包的命令是否能被 shell 识别。如果它返回 `包的命令 not found`，通常意味着 `PATH` 配置错误。

---
</details>

