function maxNumber(input){

    let i = 0;
    let data = input[i];
    let num = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while(data !== "Stop"){
        num = Number(data);

        if(num > maxNum){
            maxNum = num;
        }

        i++;
        data = input[i]; 
    }
    console.log(maxNum);
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])
