function clock() {

    let hour = 0;
    let minits = 0;
    let seconds = 0;

    for (let i = 0; i <= 23; i++) {
        hour = i;

        for (let j = 0; j <= 59; j++) {
            minits = j

            for (let k = 0; k <= 59; k++) {
                seconds = k
                console.log(`${hour} : ${minits} : ${seconds}`);
            }
        }
    }
}

clock()