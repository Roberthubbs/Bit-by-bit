const consecutiveArr = (arr) => {
    if (arr.length === 0) return [];
    let len = 0;
    let runningCheck = [];
    let returnArr = [];
    arr.forEach((val, i) => {
        if (arr[i] > arr[i-1]+1){
            if (runningCheck.length === 0){
                runningCheck.push(arr[i-1], arr[i])
            } else {
                runningCheck.push(arr[i])
            }
        }
        runningCheck.length > returnArr.length ? returnArr = runningCheck : null;
        if (arr[i] !== arr[i - 1] + 1){
            runningCheck = [];
        }
    })
    if (returnArr.length === 0){
        return arr[0]
    } else {
        return returnArr;
    }
}

let testOne = [4, 2, 1, 6, 5];
let testTwo = [5, 5, 3, 1];

console.log(consecutiveArr(testOne))
console.log(consecutiveArr(testTwo))