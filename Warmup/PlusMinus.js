function plusMinus(arr){
    let countPlus = 0;
    let countMinus = 0;
    let countZero = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            countPlus++;
        } else if(arr[i]<0){
            countMinus++;
        } else {
            countZero++;
        }
    }

    let resultPlus = countPlus/arr.length;
    let resultMinus =  countMinus/arr.length;
    let resultZero = countZero/arr.length;
    
    let fracPlus = resultPlus.toFixed(6);
    let fracMinus = resultMinus.toFixed(6);
    let fracZero = resultZero.toFixed(6);

    return {
        fracPlus,
        fracMinus,
        fracZero
    };

}

console.log(plusMinus([-4,3,-9,0,4,1]))

