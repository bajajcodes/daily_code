(function insertionSort(array) {
  const output = [...array];
  for (let i = 1; i < output.length; ++i) {
    let key = output[i];
    let j = i - 1;
    let comparisons = 0;
    while (j >= 0 && output[j] > key) {
      output[j + 1] = output[j];
      --j;
      ++comparisons;
    }
    console.log(comparisons, "comparisons to place",key)
    output[j + 1] = key;
  }
  console.log("input", array);
  console.log("output", output);
  return output;
})([4, 3, 7, 8, 1, 2,-1,0]);

/**
 *
 * what happens in insertion sort is we take the array and assume they are two parts to it sorted and unsorted
 * initial element 0 is in sorted part, and rest in unsorted part.
 * we start from index 1(key) and go till index 0, and check if current element is greater then key
 * if it is then, swap to right position means place into current post + 1 index position
 * if it is not then, do nothing and come out of loop
 * at last we place key into its right position by placing to i + 1 i.e. to right of sorted array if already sorted or right of
 * sorted sub part where it fits.
 */
