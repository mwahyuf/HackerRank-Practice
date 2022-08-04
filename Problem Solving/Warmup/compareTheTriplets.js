function compareTriplets(a, b){
    let scoreA = 0;
    let scoreB = 0;

    for(let i=0;i<3;i++){
        if(a[i]>b[i]){
            scoreA++;
        } else if(a[i]<b[i]){
            scoreB++;
        }
    }
    return [scoreA, scoreB];
}

console.log(compareTriplets([3,4,1,5,6,7]))

