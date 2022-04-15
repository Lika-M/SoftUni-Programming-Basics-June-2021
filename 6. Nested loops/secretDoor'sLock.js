function secretDoorsLock(input) {

    let max00 = Number(input[0]);
    let max0 = Number(input[1]);
    let max = Number(input[2]);
    let isComplex = false;

    for (let i = 1; i <= max00; i++) {
        for (let j = 2; j <= max0; j++) {
            for (let k = 1; k <= max; k++) {
                let result = '';
                if (i % 2 === 0 && k % 2 === 0) {

                    for (let l = 2; l < j; l++) {
                        if (j % l === 0) {
                            isComplex = true;
                            break;
                        }
                    }
                    if (isComplex) {
                        continue;
                    } else {
                        result = `${i} ${j} ${k}`;
                        console.log(result)
                    }
                }
            }
        }
    }
}
secretDoorsLock(["3", "5", "5"])