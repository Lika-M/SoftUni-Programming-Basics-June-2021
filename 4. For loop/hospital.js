function hospital(input) {

    let days = Number(input[0]);
    let doctors = 7;
    let treatedP = 0;
    let untrietedP = 0;
    let allTreated = 0;
    let allUntreated = 0;
    let allPatient = 0;


    for (let i = 1; i <= days; i++) {

        let patients = Number(input[i]);

       
        if (patients >= doctors) {
            treatedP = doctors;
            if (i % 3 === 0) {
                doctors++;
            }
        } else {
            treatedP = patients;
            if (i % 3 === 0) {
                doctors++;
            }
        }
        allPatient += patients
        allTreated += treatedP;
        allUntreated = allPatient - allTreated;

    }
    console.log(allTreated)
    console.log(allUntreated)
}
hospital(["6", "25", "25", "25", "25", "25", "3"])