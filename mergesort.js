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

  // base case
  if(arr.length === 1) {
    return arr;
  }

  const [firstHalf, secondHalf] = split(arr);

  if(firstHalf.length === 1 && secondHalf.length === 1) {
    return merge(firstHalf, secondHalf)
  }

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}


const result = mergeSort([1, 7, 6, 3, 5, 2, 4]);
console.log(result)
