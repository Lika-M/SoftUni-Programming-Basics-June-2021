function truckDriver(input) {

    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let pay = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pay = kmPerMonth * 0.75; break;
            case "Summer":
                pay = kmPerMonth * 0.90; break;
            case "Winter":
                pay = kmPerMonth * 1.05; break;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pay = kmPerMonth * 0.95; break;
            case "Summer":
                pay = kmPerMonth * 1.10; break;
            case "Winter":
                pay = kmPerMonth * 1.25; break;
        }

    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
        switch (season) {
            case "Spring":
            case "Autumn":
            case "Summer":
            case "Winter":
                pay = kmPerMonth * 1.45; break;
        }
    }
    let salary = (pay - pay*0.10)*4;
    console.log(salary.toFixed(2));
}

truckDriver(["Winter", "5678"])