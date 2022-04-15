function fruitShop(input) {

    let fruit = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);
    let prise = 0;

    switch(dayOfWeek){
        case "Monday":
        case "Tuesday":
        case "Wednesday": 
        case "Thursday": 
        case "Friday": 
             switch (fruit) {
                case "banana": prise = (quantity * 2.50).toFixed(2); break;
                case "apple": prise = (quantity * 1.20).toFixed(2); break;
                case "orange": prise = (quantity * 0.85).toFixed(2); break;
                case "grapefruit": prise = (quantity * 1.45).toFixed(2); break;
                case "kiwi": prise = (quantity * 2.70).toFixed(2); break;
                case "pineapple": prise = (quantity * 5.50).toFixed(2); break;
                case "grapes": prise = (quantity * 3.85).toFixed(2); break;
                default: prise = "error"; break;
            }
        case "Saturday": 
        case "Sunday":
            switch (fruit) {
                case "banana": prise = (quantity * 2.70).toFixed(2); break;
                case "apple": prise = (quantity * 1.25).toFixed(2); break;
                case "orange": prise = (quantity * 0.90).toFixed(2); break;
                case "grapefruit": prise = (quantity * 1.60).toFixed(2); break;
                case "kiwi": prise = (quantity * 3.00).toFixed(2); break;
                case "pineapple": prise = (quantity * 5.60).toFixed(2); break;
                case "grapes": prise = (quantity * 4.20).toFixed(2); break;
                default: prise = "error"; break;
            }
        default: prise = "error"; break;
        }
    console.log(prise);
}

fruitShop(["orange",
"Sunday",
"3"])
