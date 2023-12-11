/**
 * 找出數字陣列中的最大數
 * @param numbers - 要找出最大數的數字陣列
 * 
 * 這個函式需要找出輸入的數字陣列中的最大數。你可以使用 JavaScript 的 Math.max 方法和展開運算符 (...) 來完成這個任務。
 * Math.max 方法可以接受多個參數並返回其中的最大值，展開運算符可以將一個陣列轉換為多個參數。
 */
export function findMaxNumber(numbers: number[]): number {
    // 在此實現函式
    let maxValue: number = numbers[0];
    for (let i=1; i < numbers.length; i++){
        if (numbers[i] > maxValue){
            maxValue = numbers[i]
        }
    }
    return maxValue;
}