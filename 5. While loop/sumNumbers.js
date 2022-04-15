function sumNumbers(input) {

    let target =Number(input[0]);
    let i = 1;
    let sum = 0;

    while (target > sum) {
        let num = Number(input[i]);
        sum+=num;
        i++;
    }
    console.log(sum);

    // while(true){
    //     let num = Number(input[i]);
    //     sum+=num;
    //     i++;
    //     if(sum >= target){
    //         break;
    //     }
    // }
    // console.log(sum);

}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

