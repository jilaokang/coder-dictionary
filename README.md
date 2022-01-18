## coder-dictionary

程序员、编程常见的 1700 个 英语单词。

<br/>

## 简介

这是一个程序员常用单词库，内部包含 1700 个开发常见单词以及对应的音频文件。为方便大家使用，另外提供单词表的 JSON 格式，并带有在线音频链接。

本项目以批量导入到有道词典来作为二次开发的展示，欢迎 👏🏻 大家一起 pr，共同建设，学好英语(这玩意儿真的太头疼了 o(╥﹏╥)o)。

<br/>

## 开始使用

安装 axios 依赖：

```bash
node install
```

修改 main.js 中的 yourCookieString 字符串

```javascript
const youdao = require("./src/index").youdao;

youdao("yourCookieString");
```

执行脚本

```bash
npm run start
```

成功！

tips：cookie 如何获取？

- 打开`https://dict.youdao.com/result?word=helo&lang=en`，并登录
- 点击收藏的五角星 ⭐️ 按钮，检测 http 请求`http:...ajax/add?word=helo&lan=en`copy `cookie`部分 即可

<br/>

### 其他

该项目的原作者已经联系不上了，以此作为维护版本，继续开发。

如果你有兴趣，欢迎 pr，我会尽快处理，我的联系方式如下：

我的 wechat：kasoqian
