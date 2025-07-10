const holidays = [
  "正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日",
  "昭和の日", "憲法記念日", "みどりの日", "こどもの日"
];

// for文で表示
console.log("【for文で出力】");
for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

// while文で表示
console.log("【while文で出力】");
let j = 0;
while (j < holidays.length) {
  console.log(holidays[j]);
  j++;
}
