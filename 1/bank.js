function bank(input){

    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let persent = Number(input[2]);


    let result = deposit + period * ((deposit * persent/100)/12);

    console.log(result);
}

bank(["200", "3", "5.7"]);
