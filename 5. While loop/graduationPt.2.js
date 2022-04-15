function graduationPt2(input) {

    let name = input[0];
    let i = 1;
    let grade = 1;
    let num = Number(input[i]);
    let averageGrade = 0;
    let counter = 0;

    while (i <= 12) {
        if (num >= 4) {
            averageGrade += num;
            grade++

        } else {
            counter++
            if (counter === 2) {
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
        }

        i++
        num = Number(input[i])


    }
    if(grade > 12){
    console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`)
    }
}


graduationPt2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])




