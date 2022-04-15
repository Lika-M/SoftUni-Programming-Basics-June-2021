function averageNumber(input) {

    let num = Number(input[0]);
    let i = 1;  
    let sum = 0;

    while (i <= num) {
        let n = Number(input[i]);
        sum += n;
        i++
    }
    console.log((sum/num).toFixed(2));
}

averageNumber(["4", "3", "2", "4", "2"
    ])