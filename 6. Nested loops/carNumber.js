function carNumber(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let result = '';

    for (let i = firstNumber; i <= lastNumber; i++) {
        for (let j = firstNumber; j <= lastNumber; j++) {
            for (let k = firstNumber; k <= lastNumber; k++) {
                for (let l = firstNumber; l <= lastNumber; l++) {

                    if ((i > l) && ((j + k) % 2 === 0)) {
                        if ((i % 2 === 0) && (l % 2 !== 0)) {
                            result += `${i}${j}${k}${l} `;
                        } else if ((i % 2 !== 0) && (l % 2 === 0)) {
                            result += `${i}${j}${k}${l} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

carNumber(["3", "5"])