function concatenateData(input){

    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`I am ${firstName} ${lastName}, a ${age}-yers old person from ${town}`);

}

concatenateData(['Iglika', 'Mincheva', 52, 'Sofia'])