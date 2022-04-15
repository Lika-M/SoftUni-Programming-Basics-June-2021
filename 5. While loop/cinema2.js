function cinema(input) {

    let capacity = Number(input[0]);
    let inLength = input.length;

    let allPrise = 0;
    let allPeople = 0;

    for (let i = 1; i < inLength; i++) {
        let income = input[i];

        if (income === "Movie time!") {
            console.log(`There are ${capacity - allPeople} seats left in the cinema.`);
            break;
        }
        
        let people = Number(input[income]);
        let ticketPrise = people * 5;

        if (people % 3 === 0) {
            ticketPrise -= 5;
        }
        allPeople += people;
        allPrise += ticketPrise;

        if (allPeople > capacity) {
            console.log(`The cinema is full.`);
            break;
        }
       
        
    }
    console.log(`Cinema income - ${allPrise} lv.`)

}
cinema(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])

