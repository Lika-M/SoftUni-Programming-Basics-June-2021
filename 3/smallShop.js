function smallShop(input) {
    let type = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let prise = 0;
    /*град / продукт	coffee	water	beer	sweets	peanuts 
    Plovdiv	          0.40	0.70	1.15	1.30	1.50*/
    switch (town) {
        case "Sofia":
            switch (type) {
                case "coffee": prise = quantity * 0.50; break;
                case "water": prise = quantity * 0.80; break;
                case "beer": prise = quantity * 1.20;  break;
                case "sweets": prise = quantity * 1.45; break;
                case "peanuts": prise = quantity * 1.60; break;
            }
    }
    switch (town) {
        case "Plovdiv":
            switch (type) {
                case "coffee": prise = quantity * 0.40; break;
                case "water": prise = quantity * 0.70; break;
                case "beer": prise = quantity * 1.15; break;
                case "sweets": prise = quantity * 1.30; break;
                case "peanuts": prise = quantity * 1.50; break;
            }
    }
    switch(town){
        case "Varna":
            switch(type){
                case "coffee": prise = quantity * 0.45; break;
                case "water": prise = quantity * 0.70; break;
                case "beer": prise = quantity * 1.10; break;
                case "sweets": prise = quantity * 1.35; break;
                case "peanuts": prise = quantity * 1.55;  break; 
            }
    } console.log(prise.toFixed(2));
}

smallShop(["beer",
"Sofia",
"6"])


