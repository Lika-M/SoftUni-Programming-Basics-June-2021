function luckyNumbers(input){
    let num = Number(input[0]);
    let magicNum ="";
    let buff ="";

    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                for(let l = 1; l <= 9; l++){

                  
                    if(i + j !== k + l){
                        continue;
                    }
                    if( num % (i + j) !== 0){
                        continue;
                    }
                    
                    buff += `${i}${j}${k}${l} `
                    
                   
                   
                }
            }
        }
    }

    magicNum += buff;
    console.log(magicNum);
}

luckyNumbers(["7"])
