function pipesInPool(input){

    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let filled = (p1 + p2)* hours;
    let filledPercent = filled * 100/volume
    let firstPipePercent = p1*hours/filled*100;
    let secondPipePersent = p2*hours/filled*100;

    if(filled<=volume){
        console.log(`The pool is ${filledPercent.toFixed(2)}% full. Pipe 1: ${firstPipePercent.toFixed(2)}%. Pipe 2: ${secondPipePersent.toFixed(2)}%.`)
    }
    else{
        console.log(`For ${hours} hours the pool overflows with ${(filled-volume).toFixed(2)} liters.`)
    }
}

pipesInPool([1000, 100, 120, 3])

