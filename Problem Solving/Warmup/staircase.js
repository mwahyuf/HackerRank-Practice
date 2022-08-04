function staircase(n) {
    
    for(let i=0;i<n;i++){
        let space = "";
        for(let j=0;j<n-i-1;j++){
            space += " ";
        }
        
        for(let k=0;k<i+1;k++){
            space += "#";
        }
        console.log(space);
    }
}

staircase(6);