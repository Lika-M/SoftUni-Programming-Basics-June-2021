function numberPyramid(input){
    let n = Number(input[0]);
    let current = 1;
    let currentLine = " ";

    let isBigger = false;

    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col ++){

            if(current > n){
                isBigger = true;
                break;
            }
            currentLine += current + " ";
            current ++
        }
        console.log(currentLine);
        currentLine = " ";
        if(isBigger){
            break;
        }
    }
}

numberPyramid(["7"])
