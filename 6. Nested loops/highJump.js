function highJump(input) {

    let i = 0;
    let desiredHight = Number(input[i]);
    let currentHight = desiredHight - 30;
    let c = 0;
    let c1 = 0;
    let c2 = 0;
    let isFall = false;
    i++;
    let jump = Number(input[i]);

    while (currentHight <= desiredHight) {
      
        if (jump > currentHight) {
            c++
            c1++;
            currentHight += 5;
            if(currentHight > desiredHight){
                currentHight -= 5;
                break;
            }
            c2 = 0;
        } else {
            c++
            c2++;
            if (c2 === 3) {
                isFall = true;
                break;
            }
        }
        i++;
        jump = Number(input[i])
    }
    if (isFall) {
        console.log(`Tihomir failed at ${currentHight}cm after ${c} jumps.`)
    } else {
        console.log(`Tihomir succeeded, he jumped over ${currentHight}cm after ${c} jumps.`)
    }
}



highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])




