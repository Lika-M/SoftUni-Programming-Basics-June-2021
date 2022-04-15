function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let minEarly = minExam - minArrive;
    let hourEarly = hourExam - hourArrive;
    let minBelate = minArrive - minExam;
    let hourBelate = hourArrive - hourExam;

    if (hourExam === hourArrive) {
        if (minExam === minArrive) {
            console.log("On time");
        } else if (minExam > minArrive) {
            if (minExam - minArrive <= 30 || minExam - minArrive > 1) {
                if (minEarly > 10) {
                    console.log("On time");
                    console.log(`${minEarly} minutes before the start`)
                } else if (minEarly < 10) {
                    console.log("On time");
                    console.log(`0${minEarly} minutes before the start`)
                }
            }
        } else if (minExam < minArrive) {
            if (minBelate > 10) {
                console.log("Late");
                console.log(`${minBelate} minutes after the start`)
            } else if (minBelate < 10) {
                console.log("Late");
                console.log(`:0${minBelate} minutes after the start`)
            }
        }
    } else if (hourExam > hourArrive) {
        if (minExam >= minArrive) {
            if (minExam - minArrive <= 30 || minExam - minArrive > 1) {
                if (minEarly > 10) {
                    console.log("On time");
                    console.log(`${minEarly} minutes before the start`)
                } else if (minEarly < 10) {
                    console.log("On time");
                    console.log(`0${minEarly} minutes before the start`)
                }
            }if (minEarly > 10) {
                console.log("Early");
                console.log(`${hourEarly}:${minEarly} hours before the start`)
            } else if (minEarly < 10) {
                console.log("Early");
                console.log(`${hourEarly}:0${minEarly} hours before the start`)
            }
        } else if (minExam < minArrive) {
            if ((minExam + 60) - minArrive <= 30) {
                console.log("On time");
                console.log(`${(minExam + 60) - minArrive} minutes before the start`)
            } else {
                console.log("Early");
                console.log(`${(minExam + 60) - minArrive} minutes before the start`)
            }
        }
    } else if (hourExam < hourArrive) {
        if (minExam > minArrive) {
            if (minExam + 60 > 10) {
                console.log("Late");
                console.log(`${(minArrive + 60) - minExam} minutes after the start`)
            } else if (minExam + 60 < 10) {
                console.log("Late");
                console.log(`0${(minArrive + 60) - minExam} minutes after the start`)
            }
        } else if (minExam < minArrive) {
            console.log("Late");
            console.log(`${hourBelate}:${(minExam + 60) - minArrive} hours after the start`)
        }

    }
}

onTimeForTheExam(["11",
    "30",
    "10",
    "55"])
