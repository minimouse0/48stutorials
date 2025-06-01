# 怎么解析XML

> [!NOTE]
> js没有内置xml解析工具，需要用NPM包

## xml-js

`xml-js` 是一个用于在 XML 和 JavaScript 对象/JSON 之间转换的工具。它可以解析 XML 的各种元素，包括属性、文本、注释、CData、DOCTYPE 等，并且转换是可逆的。

### 安装
你可以使用 npm 安装它：
```sh
npm install xml-js
```

### 使用示例
#### 1. XML 转 JSON
```js
const convert = require('xml-js');

const xml = `<note><to>User</to><from>Copilot</from><message>Hello, world!</message></note>`;
const json = convert.xml2json(xml, { compact: true, spaces: 4 });

console.log(json);
```

#### 2. JSON 转 XML
```js
const json = {
  note: {
    to: "User",
    from: "Copilot",
    message: "Hello, world!"
  }
};

const xml = convert.json2xml(json, { compact: true, spaces: 4 });
console.log(xml);
```

## xml-js-builder

`xml-js-builder` 是一个 npm 库，专门用于处理 XML 命名空间，使 XML 解析和构建更加方便。以下是它的基本用法：

### **安装**
你可以使用 npm 进行安装：
```sh
npm install xml-js-builder
```

### **使用示例**
#### **解析 XML**
```js
const xmljs = require('xml-js-builder');

const xml = `<playlist xmlns="http://xspf.org/ns/0/" version="1" xml:base="local://primary" xmlns:aimp="http://www.aimp.ru/playlist/ns/0/">
                <track>Song 1</track>
             </playlist>`;

const parsedXml = xmljs.XML.parse(xml);
console.log(parsedXml.find('xspf:playlist').findText());
```

#### **查找特定标签**
```js
try {
    const text = parsedXml.find('xspf:playlist').find('xspf:track').findText();
    console.log(text);
} catch (ex) {
    console.error(ex);
}
```

