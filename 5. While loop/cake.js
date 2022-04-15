function cake(input) {

    let w = Number(input[0]);
    let l = Number(input[1]);
    let vol = w * l;

    let i = 2;
    let income = (input[i]);
    let eatenCake = 0;

    while (eatenCake <= vol) {
        if (income === "STOP") {
            break;
        }
        let nums = Number(input[i]);
        eatenCake += nums;
        i++;
        income = input[i];
    }

    if (eatenCake <= vol) {
        console.log(`${vol - eatenCake} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${eatenCake - vol} pieces more.`)
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])



