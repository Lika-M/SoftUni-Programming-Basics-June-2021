function fitnessCenter(input) {

    let people = Number(input[0]);
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;
    let a5 = 0;
    let a6 = 0;
    let b1 = 0;
    let b2 = 0;
    for (let i = 1; i <= people; i++) {
        let activity = input[i];
        switch (activity) {
            case "Back": b1++; a1++; break
            case "Chest": b1++; a2++; break
            case "Legs": b1++; a3++; break
            case "Abs": b1++; a4++; break
            case "Protein shake": b2++; a5++; break
            case "Protein bar": b2++; a6++; break
        }
    }
    console.log(`${a1} - back`);
    console.log(`${a2} - chest`);
    console.log(`${a3} - legs`);
    console.log(`${a4} - abs`);
    console.log(`${a5} - protein shake`);
    console.log(`${a6} - protein bar`);
    console.log(`${(b1/people*100).toFixed(2)}% - work out`);
    console.log(`${(b2/people*100).toFixed(2)}% - protein`)
}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
