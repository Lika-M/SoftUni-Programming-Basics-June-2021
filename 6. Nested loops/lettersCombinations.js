function lettersCombinations(input) {
    let l1 = input[0].charCodeAt();
    let l2 = input[1].charCodeAt();
    let l3 = input[2].charCodeAt()

    let buff = '';
    let count = 0;

    for (let i = l1; i <= l2; i++) {
        if (i !== l3) {
            for (let j = l1; j <= l2; j++) {
                if (j !== l3) {
                    for (let k = l1; k <= l2; k++) {
                        if (k !== l3) {
                            count++;
                            buff += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `
                        }
                    }
                }
            }
        }
    }
    console.log(`${buff}${count}`)
}

lettersCombinations(["a", "c", "b"])