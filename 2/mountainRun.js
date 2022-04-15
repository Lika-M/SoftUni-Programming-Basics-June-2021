function mountainRun(input){

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secPerMeter = Number(input[2]);

    let time = distance*secPerMeter;
    let delay = Math.floor(distance/50)*30;
    let timeGeorge = time+delay;

    if(timeGeorge<record){
        console.log(`Yes! The new record is ${timeGeorge.toFixed(2)} seconds.`)
    }else{
        console.log(`No! He was ${(timeGeorge-record).toFixed(2)} seconds slower.`)
    }
    

}
mountainRun([5554.36, 1340, 3.23])