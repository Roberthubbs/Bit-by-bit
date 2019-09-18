//Day 1 Robert Solution

function median(arrOne, arrTwo) {
    let totalArr = arrOne.concat(arrTwo);
    totalArr = totalArr.sort();
    let index;
    let indexTwo = false;
    if (totalArr.length % 2 !== 0) {
        index = Math.floor(totalArr.length / 2)
    } else {
        index = Math.floor(totalArr.length / 2)
        indexTwo = Math.floor(totalArr.length / 2) - 1
    }
    if (!indexTwo) {
        return totalArr[index]
    } else {

        return (totalArr[index] + totalArr[indexTwo]) / 2
    }


}



