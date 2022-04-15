function salary(input) {

    let n = Number(input[0]);
    let salary = Number(input[1]);
    let length = input.length;

    let text = 0;

    for (let i = 2; i <= length; i++) {
        text = input[i];

        switch (text) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
    }
    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.floor(salary));
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])


