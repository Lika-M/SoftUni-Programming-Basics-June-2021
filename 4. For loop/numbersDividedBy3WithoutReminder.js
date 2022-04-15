function numbersDividedBy3WithoutReminder(input) {

    let length = Number(input.length)
    let letter = ""

    for (i = 0; i < length; i++) {
        let l = input[i];

        if (l === "End") {
            break;
        }
        switch (l) {
            case "c": 
            case "o": 
            case "n": continue; 
        } 
        letter += l;

    }

    console.log(letter);

}

numbersDividedBy3WithoutReminder(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"
])