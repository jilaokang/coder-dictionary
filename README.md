## coder-dictionary

程序员编程过程中常见的 1700 个 英语单词。

<br/>

## 简介

该库包含 1700 个开发常见单词以及对应的音频文件。为方便小伙伴儿们使用，另提供单词表源文件、JSON 格式、以及在线音频链接。

除单词文件内，本项目支持一键导入到网易有道云词典，在单词本中大家可以更好的记忆。

如果大家有自己喜欢的记单词 app，欢迎 pr，提供给更多小伙伴使用

<br/>

## 开始使用

安装 axios 依赖

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

<br/>

**tips：cookie 如何获取？**

- 打开`https://dict.youdao.com/result?word=helo&lang=en`，并登录
- 点击收藏的五角星 ⭐️ 按钮，检测 http 请求`http:...ajax/add?word=helo&lan=en`copy `cookie`部分 即可

<br/>

## 其他

该项目的原作者已经联系不上了，以此项目作为维护版本，继续开发。

如果你有兴趣，欢迎 pr，我会尽快处理，我的联系方式如下：

wechat：kasoqian
