## it_words

【加强版】程序员、编程常见 1700 词

## 当前实现的功能

### 文件

- word 词表
- word JSON 格式词表
- word mp3 1700 词

### 功能

1.批量导入到有道词典

模块路径`src/youdao/main.js`,传入 `cookie` 值即可完成批量导入

cookie 如何获取？

- 打开`https://dict.youdao.com/result?word=helo&lang=en`，并登录
- 点击收藏的五角星 ⭐️ 按钮，检测 http 请求`http:...ajax/add?word=helo&lan=en`copy `cookie`部分 即可

### 其他

这个项目是很有价值，但原作者已经联系不上了，以此作为维护版本，继续开发。

如果你有兴趣，欢迎 pr，我会尽快处理

thanks~
