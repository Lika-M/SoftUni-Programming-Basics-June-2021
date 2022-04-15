function safari(input){

    let budget = Number(input[0]);
    let litersFuel = Number(input[1]);
    let dayOfWeek = input[2];

    let fuel = litersFuel*2.10;
    let money = fuel+100;

    if(dayOfWeek==="Saturday"){
        money = (fuel+100)*0.9;
    }else if(dayOfWeek==="Sunday"){
    money = (fuel+100)*0.8;
    }

    if(money<=budget){
        console.log(`Safari time! Money left: ${(budget-money).toFixed(2)} lv.`)
    }else{
        console.log(`Not enough money! Money needed: ${(money-budget).toFixed(2)} lv.`)
    }


}
safari([120, 30, "Saturday"])