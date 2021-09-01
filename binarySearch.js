/**
 * BINARY SEARCH
 * - Takes in sorted/unsorted) array
 * - Takes in item to be searched
 * - Sorts the array
 * - Applies binary search
 * */

const ARRAY = [4, 7, 8, 45436, 345, 367, 22, 1, 99, 34, 2, 9, 11, 17, 99];
const TO_FIND = 99;

const binarySearch = (list, item) => {
  let lowerBound = 0;
  let upperBound = list.length - 1;

  while (lowerBound <= upperBound) {
    let middleBound = Math.floor((lowerBound + upperBound) / 2);
    if (list[middleBound] < item) lowerBound = middleBound + 1;  // ±1 because we've already checked the middleBound
    else if (list[middleBound] > item) upperBound = middleBound - 1;
    else if (list[middleBound] === item) return `${item} found at index ${middleBound}`;
    else return `${item} not found`;
  }

};

const sortedArray = ARRAY.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));  // added () for readability
console.log(binarySearch(sortedArray, TO_FIND));
