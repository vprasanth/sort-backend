function mergeSort(inputArr) {
  
  if(!inputArr) return [];

  if(inputArr.length <= 1) {
    return inputArr;
  }
  
  const middle = Math.floor(inputArr.length/2);
  const left = inputArr.slice(0, middle);
  const right = inputArr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while(leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if(leftArr[leftIdx] < rightArr[rightIdx]) {
      result.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      result.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx));
}

module.exports = mergeSort;
