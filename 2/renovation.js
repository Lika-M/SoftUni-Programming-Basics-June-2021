function renovation(input) {

    let hight = Number(input[0]);
    let weigth = Number(input[1]);
    let percent = Number(input[2]) / 100;

    let length = Number(input.length);
    let arrea = hight * weigth * 4;
    let wallsToPaint = arrea - arrea*percent;
    let noPaintArrea = 0;

    for (let i = 3; i < length; i++) {
        let noPaint = input[i];

        if (noPaint === "Tired!") {
             break;
        }
        noPaintArrea = Number(noPaint);
        wallsToPaint -= noPaintArrea;
        
    }
    let result = Math.abs(wallsToPaint)

    if (wallsToPaint < 0){
        console.log(`All walls are painted and you have ${Math.ceil(result)} l paint left! `)
    }else if(wallsToPaint === 0){
        console.log("All walls are painted! Great job, Pesho!")
    }else{
        console.log(`${Math.ceil(wallsToPaint)} quadratic m left.`)
    }
}

renovation(["2",
"3",
"25",
"6",
"7",
"8"])

