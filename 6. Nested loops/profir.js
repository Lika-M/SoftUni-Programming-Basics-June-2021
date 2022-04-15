function profit(input) {

    let oneCoins = Number(input[0]);
    let twoCoins = Number(input[1]);
    let fiveCoins = Number(input[2]);
    let sum = Number(input[3]);
   
    let result = 0;

    for (let i = 0; i <= oneCoins; i++) {
       
        for (let j = 0; j <= twoCoins; j++) {
         
            for (let k = 0; k <= fiveCoins; k++) {
               
                result = i + 2 * j + 5 * k;

                if (result === sum) {

                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`)
                }
            }
        }
    }
}

profit(["3", "2", "3", "10"])