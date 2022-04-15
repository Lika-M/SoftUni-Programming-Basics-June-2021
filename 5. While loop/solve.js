function vacation2(input) {


    let moneyNeeded = Number(input[0]);
    let moneyWeHave = Number(input[1]);
    let index = 2;
    let spendDays = 0;
    let passedDays = 0;

    while (input[index] !== undefined) {

        let command = input[index];

        switch (command) {
            case 'spend':
                index++;
                moneyWeHave -= Number(input[index]);

                if (moneyWeHave < 0) {
                    moneyWeHave = 0;
                }

                spendDays++;
                break;

            case 'save':
                index++;
                moneyWeHave += Number(input[index]);
                break;


        }

        passedDays++;

        if (spendDays >= 5) {

            console.log(`You can't save the money.`);
            console.log(`${passedDays}`);
            break;

        } else if (moneyNeeded <= moneyWeHave) {
            console.log(`You saved the money for ${passedDays} days.`);
            break;

        }




        index++;



    }






}