function skeleton(input){

    let controlInMin = Number(input[0]);
    let controlInSec = Number(input[1]);
    let lengt = Number(input[2]);
    let secPer100Meters = Number(input[3]);

    let control = controlInMin*60 + controlInSec;
    let accelerate = lengt/120*2.5;
    let timeMartin = lengt/100*secPer100Meters - accelerate;

    if(timeMartin<=control){
        console.log(`Marin Bangiev won an Olympic quota!`)
        console.log(`His time is ${timeMartin.toFixed(3)}.`);
    }else{
        console.log(`No, Marin failed! He was ${(timeMartin - control).toFixed(3)} second slower.`)
    }


}

skeleton(["1",
"20",
"1546",
"12"])

