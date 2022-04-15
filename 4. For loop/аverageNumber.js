function аverageNumber(input){

    let first = Number(input[0]);
    let a = 0;
    let average = 0;

    for (let i = 1; i <= first; i++){

        let n = Number(input[i]);
        a += n;
    }

    average = a/ first;
    console.log((average).toFixed(2));
}

аverageNumber(["4", "3","2", "4", "2"])