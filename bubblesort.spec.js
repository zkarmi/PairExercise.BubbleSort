describe("Bubble Sort", function() {
  it("returns an array", function() {
    expect(Array.isArray(bubbleSort())).toEqual(true);
  });

  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it("sorts the array", function() {
    let arr = [5, 2, 8, 4, 1, 3, 7, 6];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("does not copy original array", function() {
    let arr = [5, 6, 8, 7, 1, 3, 4, 2];
    expect(bubbleSort(arr)).toEqual(arr);
  });
});
