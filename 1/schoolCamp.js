function schoolCamp(input) {

    let season = input[0];
    let type = input[1];
    let studentsNum = Number(input[2]);
    let nightsNum = Number(input[3]);

    let tax = 0;

    switch (season) {
        case "Winter":
            switch (type) {
                case "girls":
                case "boys":
                    tax = nightsNum * 9.60; break;
                case "mixed":
                    tax = nightsNum * 10.00; break;
            } break;
        case "Spring":
            switch (type) {
                case "girls":
                case "boys":
                    tax = nightsNum * 7.20; break;
                case "mixed":
                    tax = nightsNum * 9.50; break;
            } break;
        case "Summer":
            switch (type) {
                case "girls":
                case "boys":
                    tax = nightsNum * 15.00; break;
                case "mixed":
                    tax = nightsNum * 20.00; break;
            } break;
    }

    if (studentsNum >= 50) {
        tax *= 0.50;
    } else if (studentsNum >= 20 && studentsNum < 50) {
        tax *= 0.85;
    } else if (studentsNum >= 10 && studentsNum < 20) {
        tax *= 0.95;
    }
    
    let finalSum = studentsNum * tax;
    let sport;

    switch (season) {
        case "Winter":
            switch (type) {
                case "girls": sport = "Gymnastics"; break;
                case "boys": sport = "Judo"; break;
                case "mixed": sport = "Ski";
            } break;
        case "Spring":
            switch (type) {
                case "girls": sport = "Athletics"; break;
                case "boys": sport = "Tennis"; break;
                case "mixed": sport = "Cycling"; break;
            } break;
        case "Summer":
            switch (type) {
                case "girls": sport = "Volleyball"; break;
                case "boys": sport = "Football"; break;
                case "mixed": sport = "Swimming"; break
            } break;
    }
    console.log(`${sport} ${finalSum.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "mixed", "17", "14"])