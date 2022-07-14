function insertionSort(array) {
  for (let xi = 1; xi < array.length; ++xi) {
    let key = array[xi];
    let yi = xi - 1;
    while (yi > 0 && array[yi] > key) {
      array[yi + 1] = array[yi];
      yi = yi - 1;
    }
    array[yi + 1] = key;
  }
}
insertionSort([6, 5, 3, 1, 8, 7, 4, 2]);
