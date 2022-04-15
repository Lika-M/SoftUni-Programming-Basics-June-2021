function radiansToDegree(input){

    let rad = Number(input[0]);
    let deg = rad * 180 / Math.PI;

    console.log(deg.toFixed(0));
}

radiansToDegree(["3.1416"])