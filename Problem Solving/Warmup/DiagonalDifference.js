function diagonalDifference(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    
    for(let i=0;i<arr.length;i++){
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][arr[i].length - (1+i)];
    }
    return differenceAbsolute = Math.abs(leftDiagonalSum - rightDiagonalSum);
}

console.log("Diagonal difference Result : ", diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]))