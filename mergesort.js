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
