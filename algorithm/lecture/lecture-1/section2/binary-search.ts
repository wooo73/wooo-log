function binarySearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  let guess = Math.floor((start + end) / 2);

  while (guess <= end) {
    /** guess의 값이 타겟 보다 작으면 up , 크면 down */

    if (arr[guess] === target) {
      return true;
    } else if (arr[guess] > target) {
      end = guess - 1;
    } else {
      start = guess + 1;
    }
    guess = Math.floor((start + end) / 2);
  }
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 14)
);
