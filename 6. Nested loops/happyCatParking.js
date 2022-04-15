function happyCatParking(input){

    let days = Number(input[0]);
    let hours = Number(input[1]);
    let total = 0;
    let count = 0;

    for(i = 1; i <= days; i++){
        let dayTax = 0;
        count++;
        for(j = 1; j <= hours; j++){
            let tax = 0;
            if(i % 2 === 0 && j % 2 !== 0){
                tax =  2.50;
            } else if( i % 2 !== 0 && j % 2 === 0){
                tax =  1.25;
            }else {
                tax = 1;
            }
            dayTax += tax;
           
        }
        console.log(`Day: ${count} - ${dayTax.toFixed(2)} leva`)
        total += dayTax;
    }
    console.log(`Total: ${total.toFixed(2)} leva`)
    
}
happyCatParking(["2", "5"])