const findDuplicates = (arr) => {
    let returnArr = [];
    let myReducedArr = arr.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 1
        } else if (acc[val] === 1) {
            returnArr.push(val)
            acc[val]++
        }
        return acc;
    }, {})
    return returnArr
}
let testOne = [1, 1, 3, 4, 5]; //[1,1]
let testTwo = [1, 2, 2, 4, 5];// [2,2]
let testThree = [4, 5, 6, 7]; // []
let testFour = [1, 2, 2, 4, 5, 1, 2, 2, 4, 5] // [1,2,4,5]
console.log(findDuplicates(testOne))
console.log(findDuplicates(testTwo))
console.log(findDuplicates(testThree))
console.log(findDuplicates(testFour))