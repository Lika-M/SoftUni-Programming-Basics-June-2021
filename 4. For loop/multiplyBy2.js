function multiplyBy2(input) {

    length = Number(input.length);
    num = 0;

    for (let i = 0; i < length; i++) {
        num = Number(input[i])
        if (num < 0) {
            console.log("Negative number!")
        } else {
            num *= 2;
            console.log (`Result: ${num.toFixed(2)}`)
        }
    }
}
multiplyBy2(["0", "43.2144", "12.3", "543.23", "-20"	
    ])
    
