function sort(leftArray, rightArray, array) {
  const lengthOfLeftArray = leftArray.length;
  const lengthOfRightArray = rightArray.length;
  let i = 0,
    j = 0,
    k = 0;
  while (i < lengthOfLeftArray && j < lengthOfRightArray) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      ++i;
    } else {
      array[k] = rightArray[j];
      ++j;
    }
    ++k;
  }
  while (i < lengthOfLeftArray) {
    array[k] = leftArray[i];
    ++i;
    ++k;
  }
  while (j < lengthOfRightArray) {
    array[k] = rightArray[j];
    ++j;
    ++k;
  }
}

(function mergeSort(array) {
  console.log("unsorted", array);
  const lengthOfArray = array.length;
  if (lengthOfArray < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < middle; ++i) {
    leftArray.push(array[i]);
  }
  for (let i = middle; i < array.length; ++i) {
    rightArray.push(array[i]);
  }
  mergeSort(leftArray);
  mergeSort(rightArray);
  sort(leftArray, rightArray, array);
  console.log("sorted", array);
})([2, 4, 1, 6, 8, 5, 3, 7,9]);

//learned from: mycodeschool
//worst-case -> O(nlogn)
