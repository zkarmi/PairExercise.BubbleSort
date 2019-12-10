describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    const result = split([1, 2]);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(Array.isArray(result[0])).toEqual(true);
  });
  it('is able to handle odd-length arrays', function() {
    const result = split([1, 2, 3]);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(Array.isArray(result[0])).toEqual(true);
    expect(function() {
           return (result[0].length === 2 && result[1].length === 1)
           || (result[0].length === 1 && result[1].length === 2)
         }).toEqual(true);
  });
})
describe('Merge Array function', function() {
  it('is able to merge two arrays into one sorted array', function() {
    const arr1 = [7,2];
    const arr2 = [4,3,1];
    expect(merge(arr1, arr2)).toEqual([1,2,3,4,7]);
  });
})
