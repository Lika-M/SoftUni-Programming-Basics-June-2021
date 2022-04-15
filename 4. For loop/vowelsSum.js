function vowelsSum(input) {

    let text = input[0];
    let sum = 0;
    let length = text.length - 1;

    console.log(length);
/*буква	    a	e	i	o	u
стойност	1	2	3	4	5
 */
    for (let i = 0; i <= length; i += 1) {
        let letter = text[i]

        switch (letter) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        } 
    }
    console.log(sum);
}
vowelsSum(["hello"])