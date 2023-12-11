/**
 * 這個函式的目的是將一個數字陣列進行排序。
 * 你需要使用 JavaScript 的 Array.prototype.sort 方法來實現這個功能。
 * 在 sort 方法的比較函式中，你應該返回 a - b 來實現升序排序。
 * 
 * 範例:
 * 輸入: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
 * 輸出: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 */

export function sortNumbers(numbers: number[]): number[] {
  // 在此實現函式
  return mergeSort(numbers)
}

function merge(leftArray: number[], rightArray: number[]){
  var result = [];
  while (leftArray.length && rightArray.length){
    if (leftArray[0]<rightArray[0]){
      result.push(leftArray.shift())
    } else {
      result.push(rightArray.shift())
    }
  }
  result = leftArray.length ? result.concat(leftArray) : result.concat(rightArray)
  return result
}

function mergeSort(array: number[]) {
  if (array.length < 2){
    return array;
  }

  var mid: number = Math.floor(array.length / 2);
  var leftArray: number[] = array.slice(0, mid);
  var rightArray: number[] = array.slice(mid, array.length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));

}