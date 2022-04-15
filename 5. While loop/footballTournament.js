function vetParking(input) {
    
    let numDays = Number(input[0]);
    let numHours = Number(input[1]);
    let tax = 0;
    let total = 0;

    for (let d = 1; d <= numDays; d++) {

        let sum = 0;
        
        for (let h = 1; h <= numHours; h++) {

            if (d % 2 === 0 && (h) % 2 !== 0) {
                tax = 2.50;
            } else if (d % 2 !== 0 && (h) % 2 === 0) {
                tax = 1.25;
            } else {
                tax = 1;
            }

            sum += tax; 
        }
        console.log(`Day: ${d} - ${sum.toFixed(2)} leva`);
        total += sum;
    }
    
    console.log(`Total: ${total.toFixed(2)} leva`)

}
vetParking(["5",
"2"])



