function quickSort(inputArr) {
  
  if (inputArr <= 1) {
    return inputArr;
  }
  
  const left = [];
  const right = [];
  const result = [];
  const pivot = inputArr.pop();
  
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] <= pivot) {
      left.push(inputArr[i]);
    } else {
      right.push(inputArr[i]);
    }
  }
  
  return result.concat(quickSort(left), pivot, quickSort(right));
}

module.exports  = quickSort;

