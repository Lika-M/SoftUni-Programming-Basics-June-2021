function skiTrip(input) {

    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];

    let nights = days - 1;
    let prise = 0;

    if (days < 10) {
        switch (room) {
            case "room for one person": prise = nights * 18.00; break;
            case "apartment": prise = nights * 25.00*0.7; break;
            case "president apartment": prise = nights * 35.00*.10; break;
        }
    } else if (days >= 10 && days <= 15) {
        switch (room){
            case "room for one person": prise = nights * 18.00; break;
            case "apartment": prise = nights * 25.00 * 0.65; break;
            case "president apartment": prise = nights * 35.00 * 0.85; break;
        }
    }else if (days >15){
        switch(room){
            case "room for one person": prise = nights * 18.00; break;
            case "apartment": prise = nights * 25.00 * 0.50; break;
            case "president apartment": prise = nights * 35.00 * 0.80; break; 
        }
    }

    if(rating==="positive") {
        console.log((prise + prise*25/100).toFixed(2));
    }
    else if(rating==="negative"){
        console.log((prise - prise*10/100).toFixed(2));
    }
}

skiTrip(["14",
"apartment",
"positive"])




