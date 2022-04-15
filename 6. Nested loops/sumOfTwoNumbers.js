function sumOfTwoNumbers(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let magicNum = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let x = a; x <= b; x++) {
        for (let y = a; y <= b; y++) {

            let result = x + y;
            counter++;

            if (result === magicNum) {
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            } 
        }
        if (isFound) {
            break;
        }
    }
    if(isFound === false){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}

sumOfTwoNumbers(["23",
"24",
"20"])
