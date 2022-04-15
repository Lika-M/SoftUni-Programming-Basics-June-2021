function multiplyTable(input){

    let num = input[0];
    let first = Number(num[2]);
    let second = Number(num[1]);
    let third = Number(num[0]);
    let pro = 0;

    for(let i = 1; i <= first; i++){
        for(let j = 1; j <= second; j++){
            for(let k = 1; k <= third; k++){
                pro = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${pro};`)
            }
        }
    }
}
multiplyTable(["324"])