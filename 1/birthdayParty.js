function birthdayParty(input) {

    let rent = Number(input[0]);

    let cake = Number(rent * 20 / 100);
    let drinks = Number(cake - cake * 45 / 100);
    let animator = Number(rent / 3);
    let finalResult = rent + cake + drinks + animator;

    console.log(finalResult);

}

birthdayParty([2250]);