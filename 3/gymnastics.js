function gymnastics(input) {

    let country = input[0];
    let device = input[1];

    let result = 0;

    switch (device) {
        case "ribbon":
            switch (country) {
                case "Russia": result = 9.100 + 9.400; break;
                case "Bulgaria": result = 9.600 + 9.400; break;
                case "Italy": result = 9.200 + 9.500; break;
            } break;
        case "hoop":
            switch (country) {
                case "Russia": result = 9.300 + 9.800; break;
                case "Bulgaria": result = 9.550 + 9.750; break;
                case "Italy": result = 9.450 + 9.350; break;
            } break;
        case "rope":
            switch (country) {
                case "Russia": result = 9.600 + 9.000; break;
                case "Bulgaria": result = 9.500 + 9.400; break;
                case "Italy": result = 9.700 + 9.150; break;
            }break;
    }

    let maxResult = 20 - result;
    let persent = maxResult/20*100;

    console.log(`The team of ${country} get ${result.toFixed(3)} on ${device}.`);
    console.log(`${persent.toFixed(2)}%`);
}

gymnastics(["Bulgaria",
    "ribbon"
    ])