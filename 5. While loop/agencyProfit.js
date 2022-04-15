function agencyProfit(input) {
    let name = (input[0]);
    let adultsCount = Number(input[1]);
    let juniorCount = Number(input[2]);
    let adultsTicketsPrice = Number(input[3]);
    let serveTax = Number(input[4]);

    let juniorTicketsPrice = adultsTicketsPrice * 0.30;
    let adultsTicket = adultsTicketsPrice + serveTax;
    let juniorTicket = juniorTicketsPrice + serveTax;
    let allTickets = adultsTicket * adultsCount + juniorTicket * juniorCount;
    let finalProfit = allTickets * 0.2;


    console.log(`The profit of your agency from ${input[0]} tickets is ${finalProfit.toFixed(2)} lv.`)

}

agencyProfit(["Ryanair", 60, 23, 158.96, 39.12])