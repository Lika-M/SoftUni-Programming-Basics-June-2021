function oscarsCeremony(input){

    let rent = Number(input[0]);

    let statu = rent * 0.70;
    let catering = statu * 0.85;
    let sound = catering/2;
    let sum = rent + statu + catering + sound;

    console.log(sum.toFixed(2))
}

oscarsCeremony(["5555"])