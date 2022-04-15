function examPreparation(input) {

    let badGrades = Number(input[0]);
    let i = 1
    let task = input[i];
    let grade = input[i + 1];
    let counterBadGrades = 0;
    let counter = 0;
    let sum = 0;
    let lastTask;

    while (task !== "Enough") {
        grade = Number(input[i + 1])

        if (grade <= 4) {
            counterBadGrades++
            if (counterBadGrades === badGrades) {
                console.log(`You need a break, ${counter} poor grades.`);
                break;
            }
        }
        counter ++;
        i += 2;
        sum += grade;
        lastTask = task;
        task = input[i];
        grade = input[i + 1];
    }

    if (task === "Enough") {
        console.log(`Average score: ${(sum / counter).toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastTask}`)
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


