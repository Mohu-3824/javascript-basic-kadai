const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for (let i = 0; i < holidays.length; i++) {
    console.log(holidays[i]);
}

// while文の場合
let i = 0; // カウンター変数を初期化
while (i < holidays.length) { // 配列の長さより小さい間繰り返す
    console.log(holidays[i]); //　祝日を表示
    i++; // カウンターを増やす
}