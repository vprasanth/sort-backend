function bubbleSort(inputArr) {
  let swap = true;
  if (!inputArr) return [];

  while (swap) {
    let keepSwaping = 0;
    for (let i = 0; i < inputArr.length; i++) {
      if (i+1 < inputArr.length && inputArr[i] > inputArr[i+1]) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[i+1];
        inputArr[i+1] = temp;
        keepSwaping++;
      } 
    }
    swap = keepSwaping;
  }

  return inputArr;
}

module.exports = bubbleSort;

