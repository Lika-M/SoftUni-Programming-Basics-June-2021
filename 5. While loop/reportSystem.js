function reportSystem(input) {

    let target = Number(input[0]);
    let i = 1;
    let income = input[i];
    let cash = 0;
    let card = 0;
    let p1 = 0;
    let p2 = 0;

    while (true) {

        if (income === "End") {
            console.log("Failed to collect required money for charity.");
            break;
        } else {
            let sum = Number(input[i]);

            if (i % 2 !== 0) {
                if (sum > 100) {
                    console.log("Error in transaction!");
                } else {
                    console.log("Product sold!");
                    cash += sum;
                    p1++;
                }
            } else if (i % 2 === 0) {
                if (sum < 10) {
                    console.log("Error in transaction!")
                } else {
                    console.log("Product sold!")
                    card += sum;
                    p2++;
                }
            }

            if(cash + card >= target){
                break;
            }

            i++;
            income = input[i];
        }
    }

    if (cash + card >= target) {
        console.log(`Average CS: ${(cash / p1).toFixed(2)}`);
        console.log(`Average CC: ${(card / p2).toFixed(2)}`);
    }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"
])