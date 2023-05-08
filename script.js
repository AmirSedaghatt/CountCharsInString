let str = 'hello world daneshkar hesan js react bootcamp';
// let result = [...str].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})

let result = [...str].reduce((res, char) => {res[char] = res[char] ? res[char] + 1 : 1; return res}, {});

console.log(result);