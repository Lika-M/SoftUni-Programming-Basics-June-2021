function bills(input) {

    let months = Number(input[0]);
    let elektricity = 0;

    let water = months * 20;
    let internet = months * 15;
    let sum = 0;
    let other = 0;

    for (let i = 1; i <= months; i++) {
        elektricity = Number(input[i]);
        sum = sum + elektricity;
    }
    other = (water + internet + sum) * 1.2;
   

    console.log(`Electricity: ${sum.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`)
    console.log(`Internet: ${internet.toFixed(2)} lv`)
    console.log(`Other: ${other.toFixed(2)} lv`)
    console.log(`Average: ${((sum + water + internet + other)/months).toFixed(2)} lv`)
}

bills(["8","123.54","231.54","140.23","100","122.4","430","178.52","64.2"
    ])