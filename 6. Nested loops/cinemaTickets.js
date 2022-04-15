function cinemaTickets(input) {

    let i = 0;
    let income = input[i];

    let totalTickets = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (income !== "Finish") {
        let filmName = income;
        i++;
        let capacity = Number(input[i]);

        i++;
        let income2 = input[i];
      
        let count = 0;

        while (income2 !== "End") {
            
            let tickets = income2; 
            count++;
            totalTickets++;
           
            switch (tickets) {
                case "student": p1++; break;
                case "standard": p2++; break;
                case "kid": p3++; break;
            }

            if(count >= capacity){
                break;
            }
            i++;
            income2 = input[i];
        }  
        i++;
        income = input[i];
        

        console.log(`${filmName} - ${(count / capacity * 100).toFixed(2)}% full.`)
    }

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${(p1 / totalTickets * 100).toFixed(2)}% student tickets.`);
  console.log(`${(p2 / totalTickets * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(p3 / totalTickets * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

