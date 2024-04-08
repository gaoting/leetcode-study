function* arrayGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  const snailArr = Array.from({ length: rowsCount }, () =>
    Array(colsCount).fill(0)
  );

  const generator = arrayGenerator(this);

  let direction = true;
  for (let j = 0; j < colsCount; j++) {
    if (direction) {
      for (let i = 0; i < rowsCount; i++) {
        snailArr[i][j] = generator.next().value;
        console.log('11111', snailArr[i][j])
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; i--) {
        snailArr[i][j] = generator.next().value;
        console.log('22222', snailArr[i][j])

      }
    }
    direction = !direction;
  }
  return snailArr;
};

const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
nums.snail(5,4)