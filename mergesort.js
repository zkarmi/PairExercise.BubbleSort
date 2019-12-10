function split(arr) {
  const len = Math.floor(arr.length / 2);
  return [arr.splice(0, len), arr];
}

function merge(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  if (arr1[0] > arr2[0]) {
    let val = arr2.shift();
    return [val, ...merge(arr1, arr2)];
  } else {
    let val = arr1.shift();
    return [val, ...merge(arr1, arr2)];
  }
}

function mergeSort(arr) {
  const arrLen = arr.length;
  arr = split(arr);
  let i = 0;

  while (i < arrLen - 1) {
    if (arr[i].length === 1) {
      i++;
    } else {
      const result = split(arr[i]);
      arr.splice(i, 1, result[0], result[1]);
    }
  }
  console.log("arr = ", arr);
  // const sortedArray = merge(splitArrays[0], splitArrays[1]);
  // console.log(sortedArray);
}

mergeSort([1, 2, 3, 4, 5, 6, 7]);
