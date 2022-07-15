Array.prototype.mySort = function (compareFunction) {
  (function mergeSort(array) {
    const lengthOfArray = array.length;
    if (lengthOfArray < 2) {
      return array;
    }
    const middle = Math.floor(lengthOfArray / 2);
    const leftArray = [];
    const rightArray = [];
    for (let index = 0; index < middle; ++index) {
      leftArray.push(array[index]);
    }
    for (let index = middle; index < lengthOfArray; ++index) {
      rightArray.push(array[index]);
    }
    mergeSort(leftArray);
    mergeSort(rightArray);
    sort(leftArray, rightArray, array);
  })(this);
  function composeCompareFunction(compareResult) {
    if (compareResult === 0 || Math.sign(compareResult) === -1) {
      return true;
    }
    return false;
  }

  function sort(leftArray, rightArray, array) {
    const lengthOfLeftArray = leftArray.length;
    const lengthOfRightArray = rightArray.length;
    let i = 0,
      j = 0,
      k = 0;

    while (i < lengthOfLeftArray && j < lengthOfRightArray) {
      let compareResult = null;
      if (compareFunction) {
        compareResult = composeCompareFunction(
          compareFunction(leftArray[i], rightArray[j])
        );
      } else {
        compareResult = leftArray[i] <= rightArray[j];
      }
      if (compareResult) {
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
};

var arr = [4, 5, 1, 20, 3, 1, 2, -1];
console.log("unsorted", arr);
arr.mySort();
console.log("sorted", arr);
