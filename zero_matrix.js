const zeroMatrix = (matrix) => {
    let truthyRow = [];
    let truthyCol = [];
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === true){
                truthyRow.push(i);
                truthyCol.push(j);
            }
        }
    }
    let newArr = []
    let returnMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (truthyRow.includes(i) || truthyCol.includes(j)){
                newArr.push(true)
            } else {
                newArr.push(false)
            }
        }
        returnMatrix.push(newArr)
        newArr = [];
    }
    return returnMatrix
}

let testMatrix = [[true, false, false], [false, false, false], [false, false, false]]


console.log(zeroMatrix(testMatrix))