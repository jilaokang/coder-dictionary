const words = require("../../words.json");
const axios = require("axios");

function collection(words, cookie) {
  return axios({
    method: "post",
    url: `https://apiv3.shanbay.com/wordscollection/words_bulk_upload`,
    data: { business_id: 6, words: [...words] },
    headers: {
      Cookie: cookie,
      Origin: "https://web.shanbay.com",
    },
  })
    .then(e => {
      console.log(`success`);
    })
    .catch(e => {
      console.log(`${e}`);
    });
}

async function init() {
  const cookie = `csrftoken=faf83c72c1af13a898bc2b4631144059; _ga=GA1.2.1819329570.1642488488; sajssdk_2015_cross_new_user=1; auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQ5NzEzNTAsImV4cCI6MTY0MzM1MjgwMSwiZXhwX3YyIjoxNjQzMzUyODAxLCJkZXZpY2UiOiIiLCJ1c2VybmFtZSI6IndlY2hhdF9rbzczY2lrMyIsImlzX3N0YWZmIjowLCJzZXNzaW9uX2lkIjoiYTA1Yzc3Mjg3ODJhMTFlYzk3NjZkMjQ3NGEwZjdmNDIifQ.YMga5nN4KE96RNijIGdNKXAqInjL64RsfqZylXeBJhA; __utma=183787513.1819329570.1642488488.1642488502.1642488502.1; __utmc=183787513; __utmz=183787513.1642488502.1.1.utmcsr=open.weixin.qq.com|utmccn=(referral)|utmcmd=referral|utmcct=/; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22bjibbx%22%2C%22first_id%22%3A%2217e6bf163e85e6-089a1e57e17ed3-1d326253-2073600-17e6bf163e94cb%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%2C%22%24device_id%22%3A%2217e6bf163e85e6-089a1e57e17ed3-1d326253-2073600-17e6bf163e94cb%22%7D`;
  const tmpwords = words.map(v => v.word);
  let words2D = [];

  for (let i = 0; i < tmpwords.length; i = i + 50) {
    words2D.push(tmpwords.slice(i, i + 50));
  }

  words2D.map(async function (words) {
    try {
      await collection(words, cookie);
    } catch (e) {
      console.log(e);
    }
  });
}

init();
