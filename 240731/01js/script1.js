const month = prompt("현재는 몇 월 입니까?");

if (month >= 9 && month <= 11) {
  alert("독서의 계절 가을이네요!");
} else if (month >= 6 && month <= 8) {
  alert("여행가기 좋은 여름이네요!");
} else if (month >= 3 && month <= 5) {
  alert("햇살 가득한 봄이네요!");
} else {
  alert("스키의 계절 겨울이네요!");
}
