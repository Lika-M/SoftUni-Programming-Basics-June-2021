function cinema(input) {

    
    let capacity = Number(input[0]);
    let i = 1;
    let income = input[i];

    let allTickets = 0;

    while (income !== "Movie time!") {

        let people = Number(income);
        let ticketPrise = people * 5;

        if (people % 3 === 0) {
            ticketPrise -= 5;
        }
        capacity -=people;

        if (capacity < 0) {
            console.log("The cinema is full.")
            break;
        }
        allTickets += ticketPrise;

        i++;
        income = input[i];
    }

    if (income === "Movie time!") {
        console.log(` There are ${capacity} seats left in the cinema.`);
    }

    console.log(`Cinema income - ${allTickets} lv.`);
}

cinema(["100",
"15",
"15",
"15",
"15",
"15",
"15","15",
"15"])

100
15
15
15
15
15
15












