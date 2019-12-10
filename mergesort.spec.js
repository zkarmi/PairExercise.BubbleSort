describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    const result = split([1, 2]);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(Array.isArray(result[0])).toEqual(true);
  });

  it("is able to handle odd-length arrays", function() {
    const result = split([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(Array.isArray(result)).toEqual(true);
    expect(result.length).toEqual(2);
    expect(Array.isArray(result[0])).toEqual(true);
    expect(
      (result[0].length === 4 && result[1].length === 5) ||
        (result[0].length === 5 && result[1].length === 4)
    ).toEqual(true);
  });
});

describe("Merge Array function", function() {
  it("is able to merge two arrays into one sorted array", function() {
    const arr1 = [2, 7];
    const arr2 = [1, 3, 4];
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 7]);
  });
});
