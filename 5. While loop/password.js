function password(input) {

    let name = input[0];
    let pass = input[1];
    let curentPass = input[2];
    let i = 0;

    while (curentPass !== pass) {
        curentPass = input[i];
        i++;

    }
    console.log(`Welcome ${name}!`)
}

password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
