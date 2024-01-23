# 常见问题
## 怎么自己写配置文件并且让webpack使用？
在执行webpack的目录创建一个`webpack.config.js`，这是webpack默认使用的配置文件。如果需要指定其他的配置文件，加参数`--config`，比如`"webpack --config prod.config.js`
这个配置文件是个js，里面的配置项都是写成一个模块导出，一般整个代码里只有一个module.exports={}。  
[原文](https://webpack.docschina.org/configuration/)
## 安装webpack-cli出现Error: Cannot find module 'webpack-cli/package.json'
全局安装webpack-cli，加上-g参数，比如`sudo npm i webpack-cli -g`。[原文](https://zhuanlan.zhihu.com/p/488999601)
## Module not found: Error: Can't resolve 'bundle.js' in '/Users/jonathankuhl/Documents/Programming/node js/sandbox/webpack-app'
应该像这样执行webpack命令：`webpack app.js -o bundle.js`。[原文](https://stackoverflow.com/questions/49389677/module-not-found-error-cant-resolve-bundle-js-in-users-jonathankuhl-docum)
## Module not found: Error: Can't resolve 'fs' in React
这是v5的缺陷，没有对fs这种模块打补丁，要么回去用v4，要么别用fs，[原文](https://stackoverflow.com/questions/70591567/module-not-found-error-cant-resolve-fs-in-react)
## 代码里原本有export的模块怎么打包完没有被导出？
需要特意设置一下才能让webpack带上代码里那些package，也就是让webpack把代码作为一个库打包。  
在配置里面写上这些就可以了：
```js
module.exports = {
  // …
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      // do not specify a `name` here
      type: 'module',
    },
  },
};
```
[原文](https://www.webpackjs.com/configuration/output/#type-module)  
一个似乎很有用的教程：[webpack 系列 - 如何打包一个库](https://zhuanlan.zhihu.com/p/108873701)

