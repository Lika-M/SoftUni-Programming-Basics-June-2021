function numbersDivisibleBy9(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);

    let sum = 0;

    for (let i = a; i<= b; i++) {

        if(i % 9===0){
            sum = sum + i;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = a; i<= b; i++) {

        if(i % 9===0){
            console.log(i);
        }
       
    }
   
}

numbersDivisibleBy9(["100", "200"])