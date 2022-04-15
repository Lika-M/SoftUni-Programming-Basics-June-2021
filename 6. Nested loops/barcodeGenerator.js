function barcodeGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let num = 0;
    let isEven = false;
    let neededNum = 0;

    for (num = a; num <= b; num++) {
        num += "";

        for (i = 0; i < 4; i++) {

            let n = Number(num[i]);

            if (n % 2 === 0) {
                isEven = true;
                break;
            }
        }
        
        if (isEven) {
            isEven = false
            continue;
        } else {
            neededNum = Number(num);
            console.log(neededNum)
        }
    }

}

barcodeGenerator(["3334",
    "6789"])
