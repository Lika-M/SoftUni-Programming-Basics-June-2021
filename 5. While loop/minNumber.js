function minNumber(input){

    let i = 0;
    let num = input[0];
    let minNum = Number. MAX_SAFE_INTEGER;

    while(num != "Stop"){
        let n = Number(num);

        if(n < minNum){
            minNum = n;
        }
        num = input[i];
        i++
    }

    console.log(minNum)
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
