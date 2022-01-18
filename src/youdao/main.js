const axios = require("axios");
const words = require("../../words.json");

export default (async function (cookie) {
  //   const cookie = `OUTFOX_SEARCH_USER_ID_NCOO=912472486.4450552; OUTFOX_SEARCH_USER_ID="202331962@10.169.0.84"; _ga=GA1.2.938513775.1611459785; search-popup-show=-1; _ntes_nnid=3018463aed8e6b5ef6f2156870b611ef,1641351333257; ACCSESSIONID=D382C62F62B58076631CF93650785CB6; DICT_FORCE=true; DICT_SESS=v2|faM5AMcLkWUl0MgLkfwz0qBRMPukL6z06FPLzYhfgz0ey0fYW6MeBRPK6L640LOWRQLk4U5kMQB0wZ0LTy0fqL0pz0LQuOLzG0; DICT_LOGIN=1||1642480198626; ___rl__test__cookies=1642480209959`;

  function collection(word, cookie) {
    const url = `https://dict.youdao.com/wordbook/webapi/v2/ajax/add?word=${encodeURI(
      word,
    )}&lan=en`;

    return axios({
      mehod: "get",
      url,
      headers: {
        Cookie: cookie,
        Host: "dict.youdao.com",
      },
    });
  }

  words.map(async item => {
    const word = item.word;

    await collection(word, cookie)
      .then(res => console.log(`${word}, ${res.data.msg}`))
      .catch(res => console.log(`${word}, ERROR`));
  });
})(cookie);
