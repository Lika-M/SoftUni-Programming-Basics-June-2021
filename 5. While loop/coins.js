function coins(input) {

    let income = Number(input[0]*100);
    let p = 0;

    while (income !== 0){

    if (income >= 200) {
        income -= 200
        p++
    } else if (income >= 100) {
        income -= 100;
        p++
    } else if (income >= 50) {
        income -= 50;
        p++
    } else if (income >= 20) {
        income -= 20
        p++
    } else if (income >= 10) {
        income -= 10
        p++
    } else if (income >= 5) {
        income -= 5
        p++
    } else if (income >= 2) {
        income -= 2
        p++
    } else if (income >= 1) {
        income -= 1;
        p++
    } else {
        break;
    }
}
    console.log(p)
}


coins(["0.59"])