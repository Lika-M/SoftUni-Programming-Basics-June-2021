function solve(input){

    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    // let adressNum = 0;
    let buff = '';

    for(let adressNum = m; adressNum >= n; adressNum--){
        if(adressNum % 2 === 0 && adressNum % 3 === 0){
            if(adressNum === s){
                break;
            } else {
                buff += `${adressNum} `
            }
        }
    }
    console.log(`${buff}`)
}

solve(["1",
"36",
"12"])

