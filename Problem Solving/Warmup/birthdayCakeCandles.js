function birthdayCakeCandles(candles){
    let count = 0;
    let max = 0;
    for(let i=0;i<candles.length;i++){
        if(max < candles[i]){
            max = candles[i];
        }
    }

    for(let i=0;i<candles.length;i++){
        if(max == candles[i]){
            count++;
        }
    }
    return count;
}

console.log(birthdayCakeCandles([3,2,1,3]))