function sumAndProduct(input) {

    let n = input[0];
    let count = 0;
    let sum = 0;
    let pro = 0;
    let lastN = Number(n[n.length - 1]);


    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {

                    sum = a + b + c + d;
                    pro = a * b * c * d;

                    let division = Math.floor(pro / sum)

                    if (sum === pro && n % 5 === 0) {
                       
                        count++;
                        if(count >=2){
                            break;
                        }
                        console.log(`${a}${b}${c}${d}`);

                    } if (division === 3 && n % 3 === 0) {
                       
                        count++;
                        if(count >=2){
                            break;
                        }
                        console.log(`${d}${c}${b}${a}`);
                    }
                }
            }
        }
    }
    if (count === 0) {
        console.log("Nothing found")
    } 

}
sumAndProduct(["145"])