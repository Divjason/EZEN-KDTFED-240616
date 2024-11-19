// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 공통정의 :
// 배열 : 9개의 숫자 아이템을 가지고 있는 자료구조
// 배열의 0번째 인덱스 : 5 (*left)
// 배열의 8번째 인덱스 : 8 (*right)

// pivot : 기준값 => 배열 0번째 인덱스
// 비교값 : pivot값을 제외한 나머지 배열 내 아이템
// 비교값 내 첫번째 인덱스 : leftStartIndex = 3
// 비교값 내 마지막 인덱스 : rightStartIndex = 8

// 규칙
// leftStartIndex 오른쪽으로 한칸씩 이동, pivot보다 큰 숫자를 만나면 멈춤
// rightStartIndex 왼쪽으로 한칸씩 이동, pivot보다 작은 숫자를 만나면 멈춤
// 위에 두 인덱스값이 조건에 충족되서 이동을 멈추게 되면, 두 숫자를 swap
// leftStartIndex와 rightStartIndex가 서로 교차가 되는 시점이 오면, rightStartIndex와 pivot의 값을 swap

let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const divide = (arr, left, right) => {
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;

  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
      rightStartIndex--;
    }

    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  swap(arr, left, rightStartIndex);
  return rightStartIndex;
};

const quickSort = (arr, left, right) => {
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("==== 정렬 후 ====");
console.log(arr);
