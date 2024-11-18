let arr = [4, 1, 5, 3, 6, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let insertingData = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > insertingData) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = insertingData;
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

insertionSort(arr);

console.log("==== 정렬 후 ====");
console.log(arr);
