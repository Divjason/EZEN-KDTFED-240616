// 배열이라는 자료구조를 활용해서 3개의 숫자의 평균값을 구했다!

const arr = [87, 70, 100, 55];

let average = 0;

for (let i = 0; i < arr.length; i++) {
  average += arr[i];
}

average /= arr.length;

// 값이 추가될 때마다 1번의 수정 필요!
