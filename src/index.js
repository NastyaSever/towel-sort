
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  };
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      newArr.push(matrix[i]);
    } else {
      newArr.push(matrix[i].reverse());
    }
  };
  let result = [];
  newArr.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      result.push(el[i])
    }
  });
  return result;
};
