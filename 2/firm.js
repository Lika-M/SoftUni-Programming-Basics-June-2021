function firm(input){

    let needHours = Number(input[0]);
    let days = Number(input[1]);
    let overtimeWorkers = Number(input[2]);

    let hours = days*0.9*8;
    let overtimeHours = overtimeWorkers*2*days;
    let totalHours = Math.floor(hours+overtimeHours);

    if(totalHours>=needHours){
        console.log(`Yes!${totalHours-needHours} hours left.`)
    }else{
        console.log(`Not enough time!${needHours-totalHours} hours needed.`)
    }
}

firm([50,5,2])