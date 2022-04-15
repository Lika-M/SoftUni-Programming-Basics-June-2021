function trekkingMania(input) {

    let numGrups = Number(input[0]);

    let musalaClimb = 0;
    let monblanClimb = 0;
    let kilimClimb = 0;
    let k2Climb = 0;
    let everestClimb = 0;
    let people = 0;
    let allPeople = 0;

    let length = input.length;

    for (let i = 1; i < length; i++) {
        people = Number(input[i]);
        allPeople = allPeople + people;

        if (people <= 5) {
            musalaClimb += people;
        } else if (people <= 12) {
            monblanClimb += people;
        } else if (people <= 25) {
            kilimClimb += people;
        } else if (people <= 40) {
            k2Climb += people;
        } else if (people >= 41) {
            everestClimb += people;
        }
    }
    console.log(`${(musalaClimb / allPeople * 100).toFixed(2)}%`);
    console.log(`${(monblanClimb / allPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimClimb / allPeople * 100).toFixed(2)}%`);
    console.log(`${(k2Climb / allPeople * 100).toFixed(2)}%`);
    console.log(`${(everestClimb / allPeople * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


