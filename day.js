// 指定の日付に対応する曜日名を返す
function dayName(date) {
    const daysOfTheWeek = ["日曜日", "月曜日", "火曜日", "水曜日","木曜日", "金曜日", "土曜日"];
    return daysOfTheWeek[date.getDay()];
}

// 指定の日付の曜日を含むあいさつ文を返す
function greeting(date) {
    return `Hello, world! 素敵な${dayName(date)}になりますように。`;
}
