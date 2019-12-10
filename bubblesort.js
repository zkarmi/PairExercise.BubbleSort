const bubbleSort = (arr = []) => {
  // outer loop manages length of sub-array we're sorting
  for (let i = arr.length; i > 0; i--) {
    // flag
    // any swaps done?
    let didSwap = false;

    // inner loop goes through each index and compares with j+1
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = true;
      }
    }

    if (!didSwap) {
      break;
    }
  }

  return arr;
};
