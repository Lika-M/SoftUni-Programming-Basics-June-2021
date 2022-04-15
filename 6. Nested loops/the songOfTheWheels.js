function theSongOfTheWheels(input) {

    let num = Number(input[0]);
    let count = 0;
    let password = 0;
    let buff = '';
    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && a * b + c * d === num) {
                        isFound = true;
                        count++;
                        buff += `${a}${b}${c}${d} `

                        if (count === 4) {
                            password = `Password: ${a}${b}${c}${d}`
                        } else if(count < 4) {
                            password = `No!`
                        }
                    } 
                }
            }
        }
    }
    if (isFound) {
        console.log(buff);
        console.log(password)
    } else {
        console.log(`No!`)
    }
}

theSongOfTheWheels(["11"])