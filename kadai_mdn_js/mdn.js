const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので+1が必要
const date = today.getDate();

console.log(`${year}年${month}月${date}日`);
