function mooving(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let volume = w * l * h;

    let i = 3;
    let income = input[i];
    let sum = 0;

    while (income !== "Done") {

       let num = Number(input[i])
        sum += num; 
        i++;
        
        if (sum > volume) {
            break;
        }
        income = (input[i])
    }

    if (sum < volume) {
        console.log(`${volume - sum} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${sum - volume} Cubic meters more.`)
    }

}

mooving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
