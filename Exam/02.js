function solve(input){

    let processorsNum = Number(input[0]);
    let workersNum = Number(input[1]);
    let days = Number(input[2]);

    let hoursWorking = days * workersNum * 8;
    let produce = Math.floor(hoursWorking / 3);

    let diff = Math.abs(produce - processorsNum) * 110.10;

    if(produce < processorsNum){
        console.log(`Losses: -> ${diff.toFixed(2)} BGN`);
       
    } else {
        console.log(`Profit: -> ${diff.toFixed(2)} BGN`);
    }

}

solve(["150",
"7",
"18"])

