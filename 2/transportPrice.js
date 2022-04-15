function transportPrice(input) {

    let n = Number(input[0]);
    let periodOf24Huors = input[1];

    if(n<=20){
        let taxi=0

        if (periodOf24Huors === "day") {
            taxi = 0.70 + n * 0.79;
                console.log(taxi.toFixed(2));
        } 
        else if (periodOf24Huors === "night") {
            taxi = 0.70 + n * 0.9;
                console.log(taxi.toFixed(2));
        }
    } 

    if(n>=100){
        let train = n*0.06;
        console.log(train.toFixed(2));
    }

    if{
         let bus = n*0.09;
         console.log(bus.toFixed(2));
    }
}
transportPrice(["180", "night"])